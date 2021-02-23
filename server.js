const express = require("express");
const bodyParser = require('body-parser');
const sequelize = require("./util/database");
const User = require("./models/user");
const employeeRoutes = require("./routes/employeeRoutes");
const app = express();

app.use(bodyParser.json());
app.use("/test",employeeRoutes);
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
