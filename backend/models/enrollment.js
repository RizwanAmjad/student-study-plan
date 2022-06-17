const Joi = require("joi");

const sequelize = require("./index");
const { Course } = require("./course");
const { StudyPlan } = require("./studyPlan");

const validateJoi = (course) => {
  const schema = Joi.object({
    course: Joi.number().required().label("Course"),
    studyPlan: Joi.number().required().label("Study Plan"),
  });
  const { error } = schema.validate(course);
  return error ? error.details[0].message : error;
};

const Enrollment = sequelize.define("Enrollment", {}, { timestamps: false });

Course.hasOne(Enrollment, { foreignKey: "course" });
StudyPlan.hasOne(Enrollment, { foreignKey: "studyPlan" });

module.exports = { Enrollment, validateJoi };
