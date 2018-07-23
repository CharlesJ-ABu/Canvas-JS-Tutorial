window.onload = function(){
	var canvas = document.getElementById("canvas-drag-drop");
	console.log("Canvas-drag-drop loaded!")
	context = canvas.getContext("2d");//This define the renderhandle;
	console.log(context); // To check what is this context
	//width = canvas.width = window.innerWidth;
	//height = canvas.height = window.innerHeight;
	width = window.innerWidth;
	height = window.innerHeight;
	console.log(canvas)
	handle = {
		x:width / 2,
		y:height / 2,
		radius:20
	};
	offset = {};

	draw();

	function draw(){
		context.clearRect(0,0,width,height);

		context.fillStyle = "blue";
		context.beginPath();
		context.arc(handle.x, handle.y, handle.radius, 0, Math.Pi*2, false);
		context.fill();

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