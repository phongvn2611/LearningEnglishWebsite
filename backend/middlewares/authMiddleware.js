exports.authentication = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token)
      return res.status(400).json({ message: "Invalid Authentication." });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(400).json({ message: "Invalid Authentication." });

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.authAdmin = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });

    if (user.role !== "admin")
      return res
        .status(500)
        .json({ message: "Admin resources access denied." });

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.authInstructor = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });

    if (user.role !== "instructor")
      return res
        .status(500)
        .json({ message: "Instructor resources access denied." });

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.authRole = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });
    if (user.role === "user")
      return res.status(500).json({ message: "Access denied" });
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
