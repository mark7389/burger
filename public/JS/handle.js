// on click to handle update request
$(".devour").on("click", function(){

	var id = $(this).attr("id");
	
	$.ajax({

		url: "/api/burger/"+id,
		type: "PUT",
		data: {devoured: true},
		success: function(result){

			console.log("done "+result);
			//refresh page to load updated data
			location.reload();

		}
	});	



});