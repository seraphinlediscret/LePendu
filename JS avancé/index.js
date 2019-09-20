let canvas = document.getElementById("cnv");
console.log(canvas);
let ctx = canvas.getContext('2d');
//ctx.fillRect(10, 20, 100, 200); //rectangle
//ctx.strokRect(300, 300, 100, 100); //bordure rectangle
//======== Y ========//
ctx.beginPath(); //trajet
//ctx.moveTo(100,100); //action
//ctx.lineTo(100,300); //ligne durant le trajet
//ctx.lineTo(200,300);
//ctx.lineTo(100,100);
//ctx.lineTo(200,300);
//ctx.lineTo(300,100);
//ctx.moveTo(200,600);
//ctx.lineTo(200,300);
//ctx.stroke();//dessine
//=========================//
ctx.arc(100,100, 50,0, 2*Math.PI, true);
ctx.strokeStyle = "pink";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,100); 
ctx.lineTo(500,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350,100);
ctx.arc(50,100, 300,0, 2*Math.PI, true);
ctx.strokeStyle = "orange";
ctx.stroke();
//tête
ctx.beginPath();
ctx.moveTo(250,300);
ctx.arc(200,300,50,0, 2*Math.PI, true);
ctx.strokeStyle = "blue";
ctx.stroke();
//nez
ctx.beginPath();
ctx.moveTo(200,150);
ctx.lineTo(200,200);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(200,200);
ctx.strokeStyle = "red";
ctx.lineWith=10;
ctx.stroke();

ctx.strokeText();
