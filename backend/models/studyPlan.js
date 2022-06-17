const { DataTypes } = require("sequelize");
const Joi = require("joi");

const sequelize = require("./index");
const { User } = require("./user");

const validateJoi = (course) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
  });
  const { error } = schema.validate(course);
  return error ? error.details[0].message : error;
};

const StudyPlan = sequelize.define(
  "StudyPlan",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

User.hasOne(StudyPlan, { foreignKey: "user" });

module.exports = { StudyPlan, validateJoi };
