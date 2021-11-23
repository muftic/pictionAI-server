const Challenge = require("../models").challenge;
const Task = require("../models").task;
const { Router } = require("express");
const User = require("../models").user;
const router = new Router();
const auth = require("../auth/middleware");
const Submission = require("../models").submission;

router.get("/submissions", async (req, res) => {
  let submissions = await Submission.findAll({ include: [User] });
  return res.status(200).send({ message: "Success!", submissions });
});

module.exports = router;
