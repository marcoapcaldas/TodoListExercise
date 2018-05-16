//Check off Specific Todo by clicking;
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

//Delete the specific li
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add a new li to the To-do-List
$("input").keypress(function(event){
	if (event.which == 13) {
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

//Add the functionality of button + to show/hide "Add New Todo List"
$(".fa-plus").on("click", function(){
	$("input").fadeToggle(800, "linear", function(){
		
	})
});