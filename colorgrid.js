$(document).ready(function(){
	var ready_gridSize = 16; // default grid size
	var whileCounter = 0; // initialized counter
	while(whileCounter < ready_gridSize){
		for(var i = 0; i < ready_gridSize; i++){
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
	var input_gridSize = parseInt(prompt("Enter the number of pixels you'd like to see", 16));
	console.log(input_gridSize); 
	resizePixels(input_gridSize);
}

function resizePixels(resize_gridSize){
	var containerWidth = $('div#container').css('width');
	containerWidth = containerWidth.replace('px', '');
	console.log(containerWidth);
	var new_pixelSize = (containerWidth / resize_gridSize);
	console.log(new_pixelSize);
	var yourmom = $('.pixel').css('width');
	console.log(yourmom); 
	$('.pixel').width(new_pixelSize);
	$('.pixel').height(new_pixelSize);
	console.log(yourmom);
	resetGrid(resize_gridSize);
}

function resetGrid(reset_gridSize){
	$('div#container').html('');
	var whileCounter = 0; // initialized counter
	while(whileCounter < reset_gridSize){
		for(var i = 0; i < reset_gridSize; i++){
			$('div#container').append('<div class="pixel"></div>');
		}
		whileCounter++;
	}
}