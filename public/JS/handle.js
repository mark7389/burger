$(".devour").on("click", function(){

	var id = $(this).attr("id");
	
	$.ajax({

		url: "/api/burger/"+id,
		type: "PUT",
		data: {devoured: true},
		success: function(result){

			console.log("done "+result);
			location.reload();

		}
	});	



});