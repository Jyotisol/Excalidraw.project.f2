
const canvas = document.getElementById("canvas");

// setting height and width of canvas as sync with viewport.
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// context object : will be responsible for drawing on canvas.
const ctx = canvas.getContext("2d");

// 1. Pencil Free-hand drawing function :-----------------

let previousPosition = null;

function onMouseDown(event){
    previousPosition = [event.clientX, event.clientY];
    // adding event Listener on mouse button click:
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(event){
    let currentPosition = [event.clientX, event.clientY]
    ctx.beginPath();
    ctx.moveTo(...previousPosition);
    ctx.lineTo(...currentPosition);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    previousPosition = currentPosition;
}

function onMouseUp(event){

    // remove the mouseMove event listener after mouse up.
    canvas.removeEventListener("mousemove", onMouseMove)
}

// 2. Line Drawing Codes:-------------------

function onMouseDown_Line(event){
    // function:
    let { clientX, clientY } = event;
    ctx.beginPath();
    ctx.moveTo(clientX, clientY);
    ctx.lineWidth = 2; // line width.
    // ctx.strokeStyle = "blue";   // line default color.
}

function onMouseUp_Line(event){
    // function:
    let { clientX, clientY } = event;
    ctx.lineTo(clientX, clientY);
    ctx.stroke();
    ctx.closePath();
  }
