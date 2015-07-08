$(document).ready(function(){
	var gridSize = 16; // default grid size
	var whileCounter = 0; // initialized counter
	while(whileCounter < gridSize){
		for(var i = 0; i < gridSize; i++){
			$('div#container').append('<div class="pixel"></div>');
		}
		whileCounter++;
	}
	
});

$('#container').on('mouseover', '*', function(){
	$(this).addClass('painted');
});

function resetPixels(){
	$('#container div').removeClass('painted');
}