const express = require("express");
const { Enrollment } = require("../models/enrollment");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const { courses, studyPlan } = req.body;

  courses.map(async (course) => {
    const enrollment = new Enrollment({ studyPlan, course });
    await enrollment.save();
  });

  return res.send(true);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const enrollments = await Enrollment.findAll({ where: { studyPlan: id } });
  return res.send(enrollments);
});

module.exports = router;
