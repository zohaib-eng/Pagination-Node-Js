module.exports = app => {
    const tutorials = require("../controller/tutorial.controller");
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    app.use('/api/tutorials', router);
  };