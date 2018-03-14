var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

function drawing1() {
    "use strict";
    //------------------------clear canvas
    ctx.clearRect(0, 0, 1000, 700);
    
    //------------------------draw circle first
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(225, 225, 200, 0, 2 * Math.PI);
    ctx.fill();
    
    //------------------------draw line in center
    ctx.lineWidth = 40;
    ctx.strokeStyle = "white";
    ctx.moveTo(100, 225);
    ctx.lineTo(350, 225);
    ctx.stroke();
    
    ctx.fillStyle = "white";
    ctx.font = "bold 50px Arial";
    ctx.fillText("DO NOT", 125, 175);
    ctx.fillText("ENTER", 140, 305);
}

function drawing2() {
    //------------------------clear canvas
    "use strict";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //------------------------draw triangle
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineJoin = "round";
    ctx.lineWidth = 30;
    ctx.moveTo(200, 100);
    ctx.lineTo(350, 350);
    ctx.lineTo(50, 350);
    ctx.lineTo(200, 100);
    ctx.closePath();
    ctx.stroke();
    
    //------------------------draw inner lines
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.moveTo(220, 325);
    ctx.lineTo(220, 175);
    
    ctx.moveTo(160, 325);
    ctx.lineTo(160, 275);
    ctx.lineTo(180, 225);
    ctx.lineTo(180, 175);
    ctx.strokeStyle = "black";
    ctx.stroke();

}

drawing1();