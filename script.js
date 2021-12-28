// Requisito 7

const clearButton = document.getElementById('clear-board');
const colors = document.querySelectorAll('.color');

function changeSelectedColor(event) {
  const selected = document.querySelector('.selected');
  if (selected != null) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  event.target.classList.add('selected');
}
function selectColor() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', changeSelectedColor);
  }
}

// Requisito 8
const pixels = document.querySelectorAll('.pixel');

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const colorToApply = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  const clickedSquare = event.target;
  clickedSquare.style.backgroundColor = colorToApply;
}

function pixelsToPaint() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paintPixel);
  }
}

// Requisito 7 e 8 foram feitos com ajuda no Slack da turma e os seguintes site:
// https://stackoverflow.com/questions/13980101/get-background-color-of-a-css-class-applied-to-an-element
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getcomputedstyle

// Requisito 9
function clearBoard() {
  const pixelToClear = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelToClear.length; index += 1) {
    pixelToClear[index].style.backgroundColor = 'white';
  }
}

// Feito com a ajuda dos seguintes links:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

clearButton.addEventListener('click', clearBoard);
pixelsToPaint();
selectColor();
