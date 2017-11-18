var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
var radius;
if(pageWidth <= pageHeight)
{
	canvas.width=canvas.height=pageWidth/2;
	radius = pageWidth/5;
}
else
{
	canvas.width=canvas.height=pageHeight/2;
	radius = pageHeight/5;
}
var cWidth = canvas.width;
var cHeight = canvas.height;
var clockX = cWidth/2;
var clockY = cHeight/2;

function drawClock()
{
	ctx.beginPath();

	// coloring canvas
	ctx.fillStyle="#ff6d5a";
	ctx.fillRect(0,0,cWidth,cHeight);

	//clock frame
	ctx.arc(clockX, clockY, radius, 0, 2*Math.PI);
	ctx.strokeStyle="#fff";
	ctx.lineWidth=7;
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth=3;
	
	var time = new Date();
	//animate hour clock dial
	ctx.save();
	ctx.translate(clockX, clockY);
	ctx.rotate(Math.PI/180 * ((time.getHours()%12)*30 + (time.getMinutes())/2) - Math.PI);
	ctx.strokeStyle="#000";
	ctx.rect(0, 0, 3, radius-20);
	ctx.stroke();
	ctx.restore();
	
	//animate minute clock dial
	ctx.save();
	ctx.translate(clockX, clockY);
	ctx.rotate(Math.PI/180 * ((time.getMinutes())*6) - Math.PI);
	ctx.strokeStyle="#000";
	ctx.rect(0, 0, 3, radius-20);
	ctx.stroke();
	ctx.restore();

	//animate minute clock dial
	ctx.save();
	ctx.translate(clockX, clockY);
	ctx.rotate(Math.PI/180 * ((time.getSeconds())*6) - Math.PI);
	ctx.strokeStyle="#000";
	ctx.rect(0, 0, 3, radius-20);
	ctx.stroke();
	ctx.restore();
		
	//disc at center
	ctx.beginPath();
	ctx.arc(clockX, clockY, 7, 0, 2*Math.PI);
	ctx.fillStyle="#fff";
	ctx.fill();

	ctx.closePath();
	window.requestAnimationFrame(drawClock);
}
window.requestAnimationFrame(drawClock);