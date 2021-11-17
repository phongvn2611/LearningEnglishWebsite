const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailConfig = require("../configs/mailConfig");

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
    mailConfig.sendEmail(email, mailConfig.activationEmail(url));
    return res.status(200).json({
      message: "Register successfully! Please activate your email to start",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.activateEmail = async (req, res) => {
  try {
    const { activation_token } = req.body;
    const user = jwt.verify(
      activation_token,
      process.env.ACTIVATION_TOKEN_SECRET
    );

    const { name, email, password } = user;

    const newUser = new Users({
      name,
      email,
      password,
    });

    await newUser.save();

    return res.status(200).json({
      message: "Account has been activated!",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "This email does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Password is incorrect" });

    const refresh_token = createRefreshToken({ id: user._id });
    res.cookie("token", refresh_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),
    });

    return res.json({
      user,
      message: "Login Successfully!",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAccessToken = async (req, res) => {
  try {
    const rf_token = req.cookies.token;
    if (!rf_token)
      return res.status(400).json({ message: "Please login now!" });

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ message: "Please login now!" });

      const access_token = createAccessToken({ id: user.id });
      res.json({ access_token });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "This email does not exist." });

    const access_token = createAccessToken({ id: user._id });
    const url = `${CLIENT_URL}/user/reset/${access_token}`;
    console.log(mailConfig.resetPasswordMail(url));
    mailConfig.sendEmail(email, mailConfig.resetPasswordMail(url));
    return res
      .status(200)
      .json({ message: "Mail has been sent, please check your email." });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, access_token } = req.body;
    const user = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
    const passwordHash = await bcrypt.hash(password, 12);
    await Users.findOneAndUpdate(
      { _id: user.id },
      {
        password: passwordHash,
      }
    );
    return res.status(200).json({ message: "Password changed successfully!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getUserInfo = async (req, res) => {
  try {
    const { isAuth } = res.locals;
    if (!isAuth) {
      return res.status(400).json({ message: "Get user information failed" });
    }
    const user = await Users.findById(req.user.id);
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Logout failed" });
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "10m",
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
