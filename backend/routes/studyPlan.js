const express = require("express");

const router = express.Router();

const { StudyPlan, validateJoi } = require("../models/studyPlan");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const error = validateJoi(req.body);
  if (error) return res.status(400).send(error);

  const studyPlan = new StudyPlan({ ...req.body, user: req.user.id });

  return res.send(await studyPlan.save());
});

router.get("/", async (req, res) => {
  const studyPlans = await StudyPlan.findAll();

  return res.send(studyPlans);
});

module.exports = router;
