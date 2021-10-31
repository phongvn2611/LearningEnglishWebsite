exports.auth = (req, res, next) => {
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

exports.authAdmin = (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });

    if (user.role !== 1)
      return res
        .status(500)
        .json({ message: "Admin resources access denied." });

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.authInstructor = (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.id });

    if (user.role !== -1)
      return res
        .status(500)
        .json({ message: "Instructor resources access denied." });

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
