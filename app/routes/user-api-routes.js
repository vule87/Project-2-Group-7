// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// // // Requiring our models
const db = require("../../models");
// // // Routes
// // // =============================================================
module.exports = function(app) {
    app.get("api/user/", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser);
        });
    });
};
