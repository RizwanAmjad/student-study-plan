const express = require("express");

const { Course, validateJoi } = require("../models/course");

const router = express.Router();

router.post("/", async (req, res) => {
  const error = validateJoi(req.body);
  if (error) return res.status(400).send(error);

  const course = new Course(req.body);
  return res.send(await course.save());
});

router.get("/", async (_, res) => {
  const courses = await Course.findAll();
  return res.send(courses);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const course = await Course.findByPk(id);

  if (!course) return res.status(404).send("Course not found");

  return res.send(course);
});

module.exports = router;
