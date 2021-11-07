const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../configs/mailConfig");

const { CLIENT_URL } = process.env;

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This email already exists" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = {
      name,
      email,
      password: passwordHash,
    };
    const activation_token = createActivationToken(newUser);
    const url = `${CLIENT_URL}/user/activate/${activation_token}`;
    sendEmail(email, url, "Verify your email address");
    res.status(200).json({
      message: "Register successfully! Please activate your email to start",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

exports.activateEmail = async (req, res) => {
  try {
    const { activation_token } = req.body;
    const user = jwt.verify(
      activation_token,
      process.env.ACTIVATION_TOKEN_SECRET
    );

    const { name, email, password } = user;

    const check = await Users.findOne({ email });
    if (check)
      return res.status(400).json({ message: "This email already exists" });

    const newUser = new Users({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(200).json({
      message: "Account has been activated!",
      user: {
        ...newUser._doc,
        password: ''
  }  });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "This email does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Password is incorrect" });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });
    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/user/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      message: 'Login Successfully!',
      access_token,
      user: {
          ...user._doc,
          password: ''
      }
  })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

exports.getAccessToken = async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({ message: "Please login now!" });

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ message: "Please login now!" });

      const access_token = createAccessToken({ id: user.id });
      res.json({ access_token });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "This email does not exist." });

    const access_token = createAccessToken({ id: user._id });
    const url = `${CLIENT_URL}/user/reset/${access_token}`;

    sendMail(email, url, "Reset your password");
    res.json({ message: "Re-send the password, please check your email." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

exports.getProfile = async (req, res) => {
  try {
    const users = await Users.findById(req.user.id).select('-password');
    res.status(200).json(users)
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

