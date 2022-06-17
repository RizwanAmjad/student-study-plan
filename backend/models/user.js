const { DataTypes } = require("sequelize");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const sequelize = require("./index");

const validateJoi = (course) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).label("Password"),
  });
  const { error } = schema.validate(course);
  return error ? error.details[0].message : error;
};

const validateJoiAuth = (course) => {
  const schema = Joi.object({
    email: Joi.string().required().label("Email"),
    password: Joi.string().min(8).label("Password"),
  });
  const { error } = schema.validate(course);
  return error ? error.details[0].message : error;
};

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

User.prototype.generateAuthToken = function () {
  return jwt.sign(
    {
      id: this.id,
      name: this.name,
      email: this.email,
    },
    config.get("authKey")
  );
};

module.exports = { User, validateJoi, validateJoiAuth };
