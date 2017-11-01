$(".devour").on("click", function(){

	var id = $(this).attr("id");
	$.ajax("api/burger/"+id, {

		type: "PUT",
		data: {devoured: true}
	}).then(function(){

			console.log("done");
			location.reload();
	})




});