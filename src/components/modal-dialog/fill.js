import { canvas, ctx } from './global';

let count = 32;
let sizePixel = canvas.width / count;

const formChooseSize = window.document.querySelector('.form-size');
const sizeCanvas = window.document.querySelector('.information-size');

function defineSize() {
  formChooseSize.addEventListener('change', (e) => {
    if (e.target.className === 'size-canvas') {
      e.target.setAttribute('checked', true);
      count = e.target.value;
      sizeCanvas.textContent = `${count}х${count}`;

      sizePixel = canvas.width / count;
    }
  });
}
defineSize();

let currentColor = 'black';

function defineColor() {
  const colorBoxPrimary = window.document.querySelector('.picker-input');
  const colorPrimary = colorBoxPrimary.value;
  currentColor = colorPrimary;
  return currentColor;
}

function fill() {
  currentColor = defineColor();
  const x = window.event.layerX;
  const y = window.event.layerY;
  ctx.fillStyle = currentColor;
  ctx.fillRect(Math.floor(x / sizePixel) * sizePixel, Math.floor(y / sizePixel)
* sizePixel, sizePixel, sizePixel);
}

const countRef = count;
const sizePixelRef = sizePixel;

export {
  fill, countRef, sizePixelRef, defineColor, defineSize,
};
