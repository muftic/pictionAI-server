const express = require("express");
const corsMiddleWare = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const { PORT } = require("./config/constants");
const router = require("./routers/router");
const app = express();

app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/auth", authRouter);
app.use("/", router);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
