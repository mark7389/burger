var connection = require("../config/connections.js");

var orm = {

	all: function(table, func){

		var queryS = "SELECT * FROM "+table+";";
		connection.query(queryS, function(err, result){

			if(err) throw err;
			func(result);

		});


	},

	create:function(table, col, val, func){
		var queryS = "INSERT INTO "+ table + "("+col+",devoured)"+"VALUES (?,?)";
		connection.query(queryS, [val, false], function(err, result){

			if(err){console.log("here");
				throw err;}

			console.log("Success");
			func(result);


		});

	},
	update:function(table, col, val, colId, func){

		var queryS = "UPDATE " +table+" SET "+col+ "=" +val+" WHERE id = ?";
		connection.query(queryS, [colId], function(err, result){
			if(err) throw err;
			func(result);
		})


	}


}

module.exports = orm;