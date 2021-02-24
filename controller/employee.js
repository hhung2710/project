const User = require("../models/user");

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).send({ user: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postNewUser = async (req, res, next) => {
  try {
    const check = await User.findAll({ where: { name: req.body.name } });
    if (check.length === 0) {
      const user = await User.create({
        name: req.body.name,
        dob: req.body.dob,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone,
        avata: req.body.avata,
        username: req.body.username,
        password: req.body.password
      });
      res.status(200).send({ user: user });
    } else {
      res.status(401).send("name already existed");
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const result = await user.update({
      name: req.body.name,
      dob: req.body.dob,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
      avata: req.body.avata,
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).send("Updated!");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const result = await user.destroy();
    res.status(200).send("Complete!");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
