var orm = require("../config/orm.js");

var burger = {

	all:function(func){

		orm.all("burgers", function(res){

			func(res);

		});

	},

	create: function(col, val, func){
		
		orm.create("burgers", col, val, function(res){
			console.log("burger");
			func(res);

		});

	},
	update: function(col, val, colId, func){

		orm.update("burgers", col, val, colId, function(res){

			func(res);
		});
	}




}

module.exports = burger;