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
  /*  let probabilities = classification.probs.map(function (prob, i) {
    if (prob.label === "soccer ball") {
      return prob.confidence;
    }
  }); */
  console.log("classification", classification);
  const jsonClass = JSON.parse(classification);
  console.log(typeof jsonClass);
  console.log(jsonClass[0].confidence);
  const submission = await Submission.create({
    imageUrl,
    score: jsonClass[0].confidence * 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    challengeId,
    classification,
  });

  return res.status(201).send({ message: "Success!", submission });
});

router.get("/challenges", async (req, res) => {
  let challenges = await Challenge.findAll({});
  return res.status(200).send({ message: "Success!", challenges });
});

module.exports = router;
