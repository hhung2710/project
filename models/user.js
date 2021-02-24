const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define(
  "information",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING, allowNull: false },
    dob: { type: Sequelize.STRING, allowNull: false },
    age: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.STRING, allowNull: false },
    avata: { type: Sequelize.STRING, allowNull: false },
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false }
  },
  {
    deletedAt: "deteledAT",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = User;
