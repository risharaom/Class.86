var canvas = new fabric.Canvas('myCanvas');
 

function new_image()
{
	fabric.Image.fromURL('mothers_day.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(500);
	
	block_image_object.set({
	top:0,
	left:50
	});

	canvas.add(block_image_object);

	});
	}
function screenWidth()
{
	var x =  "Total Width: " + screen.width + "px";

  document.getElementById("display_screen_width").innerHTML = x;
 
  console.log(x);


}


function showCoords(event) {
	
	var xaxis = event.clientX;
	var yaxis = event.clientY;

	var coords = "X coords: " + xaxis + ", Y coords: " + yaxis;

	document.getElementById("display_coords").innerHTML = coords;

	console.log(coords);
  }