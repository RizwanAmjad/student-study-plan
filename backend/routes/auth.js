const express = require("express");
const router = express.Router();

const _ = require("lodash");

const { User, validateJoiAuth } = require("../models/user");

router.post("/", async (req, res) => {
  const error = validateJoiAuth(req.body);
  if (error) return res.status(400).send(error);

  const user = await User.findOne({ where: req.body });

  if (!user) return res.status(400).send("Invalid email or Password");

  return res.send(user.generateAuthToken());
});

module.exports = router;
