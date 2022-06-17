const express = require("express");

const { User, validateJoi } = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const error = validateJoi(req.body);
  if (error) return res.status(400).send(error);

  const user = new User(req.body);

  return res.send(await user.save());
});

module.exports = router;
