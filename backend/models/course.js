const { DataTypes } = require("sequelize");
const Joi = require("joi");

const sequelize = require("./index");

const validateJoi = (course) => {
  const schema = Joi.object({
    code: Joi.string().required().length(7).label("Course Code"),
    name: Joi.string().required().label("Course Name"),
    credits: Joi.number().required().min(0).label("Credits"),
    maxStudents: Joi.number().label("Max Students"),
    incompatible: Joi.number().label("Incompatible Course"),
    preparatory: Joi.number().label("Preparatory Course"),
  });
  const { error } = schema.validate(course);
  return error ? error.details[0].message : error;
};

const Course = sequelize.define(
  "Course",
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    credits: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    maxStudents: {
      type: DataTypes.NUMBER,
    },
  },
  { timestamps: false }
);

Course.hasOne(Course, { foreignKey: "incompatible" });
Course.hasOne(Course, { foreignKey: "preparatory" });

module.exports = { Course, validateJoi };
