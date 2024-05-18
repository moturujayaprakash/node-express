const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the campsites to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /campsites");
  })
  .delete((req, res) => {
    res.end("Deleting all campsites");
  });

/*

     1. Handling Rest Calls for a specific Id of the campsite
  */

campsiteRouter
  .route("/:campsiteId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will Send the Campsite  as with CampsiteId:${req.params.campsiteId}`
    );
  })
  .post((req, res) => {
    res.end(
      `Will Add the Campsite   with CampsiteId:${req.params.campsiteId} with the Name ${req.body.name} and Description ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.end(
      `Will Update the Campsite   with CampsiteId:${req.params.campsiteId} with the Name ${req.body.name} and Description ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(
      `Will Delete the Campsite   with CampsiteId:${req.params.campsiteId} with the Name ${req.body.name} and Description ${req.body.description}`
    );
  });

module.exports = campsiteRouter;
