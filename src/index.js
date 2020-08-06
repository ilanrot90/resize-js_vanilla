import "./styles.css";

const block = document.querySelector(".resizable");
const resizer = document.querySelector(".resizer");

resizer.addEventListener("mousedown", initDrag, false);

let startX, startY, startWidth, startHeight;

function initDrag(e) {
  e.preventDefault();
  startX = e.clientX;
  startY = e.clientY;
  startWidth = parseInt(document.defaultView.getComputedStyle(block).width, 10);
  // uncomment to change the height too.
  // startHeight = parseInt(
  //   document.defaultView.getComputedStyle(block).height,
  //   10
  // );
  document.documentElement.addEventListener("mousemove", doDrag, false);
  document.documentElement.addEventListener("mouseup", stopDrag, false);
}

function doDrag(e) {
  block.style.width = startWidth + e.clientX - startX + "px";
  block.style.opacity = 0.5;
  // block.style.height = startHeight + e.clientY - startY + "px";
}

function stopDrag(e) {
  block.style.opacity = 1;
  document.documentElement.removeEventListener("mousemove", doDrag, false);
}
