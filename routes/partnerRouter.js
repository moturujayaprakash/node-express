const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will Send all the partners");
  })
  .post((req, res) => {
    res.end(
      `Will Add the partner with partnerName:${req.body.name} and Desc:${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;

    res.end("PUT operation not supported on /partners");
  })
  .delete((req, res) => {
    res.end(`Will Delete all partners`);
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will Send all the  partner with partnerId:${req.params.partnerId}`
    );
  })
  .post((req, res) => {
    res.end(
      `Will Add the partner with partnerId:${req.params.partnerId} with partnerName:${req.body.name} and Desc:${req.body.description}`
    );
  })
  .put((req, res) => {
    res.end(
      `Will Update the partner with partnerId:${req.params.partnerId} with partnerName:${req.body.name} and Desc:${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Will Delete partner with partnerId:${req.params.partnerId}`);
  });

module.exports = partnerRouter;
