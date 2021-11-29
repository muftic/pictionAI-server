const Challenge = require("../models").challenge;
const Task = require("../models").task;
const { Router } = require("express");
const User = require("../models").user;
const router = new Router();
const auth = require("../auth/middleware");
const Submission = require("../models").submission;

router.get("/submissions", async (req, res) => {
  let submissions = await Submission.findAll({});
  return res.status(200).send({ message: "Success!", submissions });
});

router.post("/submissions", async (req, res) => {
  const { classification, imageUrl, score, userId, challengeId } = req.body;

  const submission = await Submission.create({
    imageUrl,
    score,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    challengeId: 1,
    classification,
  });

  return res.status(201).send({ message: "Success!", submission });
});

module.exports = router;
