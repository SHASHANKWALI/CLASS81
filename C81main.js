var x=0;
var y=0;
var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var colour= "red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    colour=document.getElementById("colour-picker").value;
    console.log(colour);
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    console.log(x);
    console.log(y);
    circle(x,y);
}
function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=5;
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.stroke();
}
function clear_screen(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}