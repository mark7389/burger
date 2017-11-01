var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){

	burger.all(function(data){

		 var hbsObj = {

		 	burgers: data,
		 }

		 res.render("index", hbsObj);


	});


});

router.post("/api/burger", function(req, res){

	burger.create("burger_name",req.body.burger_name, function(data){
		console.log("burgerscont");
		console.log("Success");
		
		res.redirect('/');

	});


});

router.put("/api/burger/:id", function(req, res){

	burger.update("devoured", req.body.devoured, req.params.id, function(result){
		console.log("Updated");
		
		res.redirect('/');
	});

});

module.exports = router;