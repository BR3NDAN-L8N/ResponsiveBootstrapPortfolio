// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {

  app.get("/", (req, res) => {
      res.render("about");
  });

  app.get("/projects", (req, res) => {
    res.render("projects");
  });

};
