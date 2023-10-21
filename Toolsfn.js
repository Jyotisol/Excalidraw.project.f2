// 1. PENCIL FUNCTION
const pencil = document.getElementById("pencil"); //querying the element.

pencil.addEventListener("click", onPencilClick);
let isPencilActive = false; // initially pencil is not selected.

function onPencilClick() {
  // pencil active class toggle:
  pencil.classList.toggle("active-btn");
  canvas.classList.toggle("crosshair");

  // working:
  isPencilActive = !isPencilActive;
  if (isPencilActive) {
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.removeEventListener("mousedown", onMouseDown);
  }
}

// 2. LINE FUNCTION
const line = document.getElementById("line");
let isLineActive = false; // initially line is not selected.

line.addEventListener("click", onLineClick);

function onLineClick() {
  // line active class toggle:
  line.classList.toggle("active-btn");
  canvas.classList.toggle("crosshair");

  // working:
  isLineActive = !isLineActive;
  if (isLineActive) {
    canvas.addEventListener("mousedown", onMouseDown_Line);
    canvas.addEventListener("mouseup", onMouseUp_Line);
  } else {
    canvas.removeEventListener("mousedown", onMouseDown_Line);
    canvas.removeEventListener("mouseup", onMouseUp_Line);
  }
}
