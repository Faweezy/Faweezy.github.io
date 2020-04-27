$('button').on("click", function() {
	$('div').fadeIn(1000, function() {
		console.log("Fade Completed");
		$(this).remove();
	});
	
})
