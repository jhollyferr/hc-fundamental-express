const express = require("express");
const userRoute = express.Router();

userRoute.get("/", (request, response) => {
  response.status(200).json({
    name: "Jhollyfer",
  });
});

module.exports = userRoute;
