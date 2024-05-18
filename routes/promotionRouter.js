const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will Send all the Promotions");
  })
  .post((req, res) => {
    res.end(
      `Will Add the Promotion with promotionName:${req.body.name} and Desc:${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;

    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res) => {
    res.end(`Will Delete all Promotions`);
  });

promotionRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will Send all the  Promotion with promotionId:${req.params.promotionId}`
    );
  })
  .post((req, res) => {
    res.end(
      `Will Add the Promotion with promotionId:${req.params.promotionId} with promotionName:${req.body.name} and Desc:${req.body.description}`
    );
  })
  .put((req, res) => {
    res.end(
      `Will Update the Promotion with promotionId:${req.params.promotionId} with promotionName:${req.body.name} and Desc:${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Will Delete Promotion with promotionId:${req.params.promotionId}`);
  });

module.exports = promotionRouter;
