//Generate a pattern
var pattern = ['g', 'r', 'y', 'b', 'y'];
var turn = 0;
var clickpanel = function(e){

});
//click and check
$('.panel').on('click', function(e){


	//get the click
	var colour = $(this).attr('data-colour')
	console.log('colour');

	//check the colour
	if (colour == pattern[turn] ) {
		console.log("YES!");
		//shortform for: turn = turn +1 
		turn++;
		//check if I finished the sequence
		if(turn >= pattern.length) {
			console.log('WINNER');
			//do smth fun
		}
	}
	else {
		console.log("NO!!!");
		//call a function
		gameover();
		//remove a life (if you have)
		//if you don't then game over
	}
});

//define a function, store as a variable
var gameover = function() {
	//fade the simon
	$('.simon').fadeTo(500, 0.5);
	//alert the user
	$('<h1>Game Over</h1>')
	.insertAfter('.simon')
	.css('text-align', 'center');
	.on('click', function(){
		$('.panel').on('click', clickpanel);
	});
	//remove click functionality
	$('.panel').off('click');
}