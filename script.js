const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

//Resize canvas size to window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "black";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if(!isDrawing) {
    return;
  }
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.lineWidth = 10;
    [lastX, lastY] = [e.offsetX, e.offsetY];

}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
