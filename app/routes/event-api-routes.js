// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// // Requiring our models
const db = require("../../models");
// // Routes
// // =============================================================
module.exports = function(app) {
    // GET route for getting all of the timelines
    app.get("/api/event/", function(req, res) {
        db.Event.findAll({}).then(function(dbEvent) {
            res.json(dbEvent);
        });
    });
    // POST route for saving a new timeline
    app.post("/api/event", function(req, res) {
        console.log(req.body);
        db.Event.create({
            userId: req.body.userId,
            TimelineId: req.body.TimelineId,
            name: req.body.name,
            description: req.body.description,
            editable: req.body.editable
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
    // Get route for returning event of a specific category
    app.get("/api/event/category/:category", function(req, res) {
        db.Post.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/event/:id", function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting event
    app.delete("/api/event/:id", function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // PUT route for updating event

    app.put("/api/event", function(req, res) {
        db.Post.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};
