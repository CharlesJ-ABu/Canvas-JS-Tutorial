window.onload = function(){
	var canvas = document.getElementById("canvas-drag-drop");
	console.log("Canvas-drag-drop loaded!")
	var context = canvas.getContext("2d");//This define the renderhandle;
	console.log(context); // To check what is this context
	width = canvas.width = window.innerWidth; //This two lines are very important that
	height = canvas.height = window.innerHeight;
	//var width = window.innerWidth;
	//var height = window.innerHeight;
	console.log(canvas)
	var handle = {
		x:width / 2,
		y:height / 2,
		radius:20
	};
	var offset = {};

	draw();

	function draw(){
		context.clearRect(0,0,width,height);
		context.fillStyle = "rgba(26, 50, 62, 1)";
		context.strokeStyle = 'blue'
		context.fillRect(10, 10, 100, 100);
		context.beginPath();
		context.arc(handle.x, handle.y, handle.radius, 0, 2 * Math.PI, false);
		context.arc(100, 100, 20, 0, 2 * Math.PI, false);
		context.fill();
		console.log("Drawing complete!", handle, Math.PI);

	}

	document.body.addEventListener("mousedown", function(event){
		if(utils.circlePointCollision(event.clientX,event.clientY,handle)){
			document.body.addEventListener("mousemove",onMouseMove);
			document.body.addEventListener("mouseup",onMouseup);
			offset.x = event.clientX - handle.x;
			offset.y = event.clientY - handle.y;
		}
	});

	function onMouseMove(event){
		handle.x = event.clientX - offset.x;
		handle.y = event.clientY - offset.y;
		draw();
	}

	function onMouseup(event) {
		// body...
		document.body.removeEventListener("mousemove",onMouseMove);
		document.body.removeEventListener("onMouseup",onMouseup);
	}


};