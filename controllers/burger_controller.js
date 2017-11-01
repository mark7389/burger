var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");
//get request method, talks to database and renders result to html
router.get("/", function(req, res){

	burger.all(function(data){

		 var hbsObj = {

		 	burgers: data,
		 }

		 res.render("index", hbsObj);


	});


});
//post request method to handle user input update database and redirect to load updated info
router.post("/api/burger", function(req, res){
	var input = req.body.burger_name.replace(/[\W_]+/g, "");
	console.log(input);
	burger.create("burger_name",input, function(data){
		
		
		res.redirect('/');

	});


});
//put request method to update burger status in database
router.put("/api/burger/:id", function(req, res){

	burger.update("devoured", req.body.devoured, req.params.id, function(result){
		console.log("Updated");
		
		res.status(200).end();
		// res.redirect("/");
		
	});

});

module.exports = router;