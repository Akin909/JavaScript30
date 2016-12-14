console.clear()
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ballRadius = 15;
let x = 0;
let y = 0;
let color = "#d4483c";
let mousedown = false
ctx = canvas.getContext("2d");
 function drawPointer(){
   ctx.beginPath();
   ctx.arc(x,y,ballRadius,0,Math.PI*2);
   ctx.fillStyle = color;
   ctx.fill();
   ctx.closePath();
  //  console.log(ctx);
 }

function hexCode(){
  //credit to magic of math the mega brain that came up with this 'OP' random hexcode generator based on the idea that a random number up to 16777215 to string would generate a random hexcode value :OOOO
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

console.log(hexCode())


function clearPointer(event){
  if(event.keyCode===32){
  mousedown = false;
  // console.log("erasing")
  return ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}


function draw(event){
  // console.log(mousedown)
  x = event.clientX;
  y = event.clientY;
  x += Math.round(event.movementX);
  y += Math.round(event.movementY);
  color = hexCode()

  if(!mousedown){
    return;
  }else{
    //Important fun/nightmare fact setTimeout causes the function to be called only once but it is forced to repeat due to conditions of the draw function being called interval on the other hand repeats endlessly despite a clear interval function
        setTimeout(drawPointer,5);
  }
}



canvas.addEventListener("mousemove",draw)
canvas.addEventListener("mousedown", (() => mousedown = true))
canvas.addEventListener("mouseup",()=> mousedown = false);
window.addEventListener('keydown',clearPointer)
canvas.addEventListener("mouseout",()=> mousedown = false);
