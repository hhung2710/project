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
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const phone = req.body.phone;
    const username = req.body.username;
    const password = req.body.password;
    const check = await User.findAll({ where: { name: name } });
    if (check.length === 0) {
      const user = await User.create({
        name: name,
        age: age,
        email: email,
        phone: phone,
        username: username,
        password: password,
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
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const phone = req.body.phone;
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findByPk(req.params.id);
    const result = await user.update({
      name: name,
      age: age,
      email: email,
      phone: phone,
      username: username,
      password: password,
    });
    res.status(401).send("Updated!");
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
      res.status(401).send("Deleted!");
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
