const canvas = window.document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let count = 32;
let sizePixel = canvas.width / count;

const formChooseSize = window.document.querySelector('.form-size');
function defineSize() {
  formChooseSize.addEventListener('change', (e) => {
    if (e.target.className === 'size-canvas') {
      e.target.setAttribute('checked', true);
      count = e.target.value;
      sizePixel = canvas.width / count;
    }
  });
}
defineSize();

const currentColor = 'black';

function fill(color) {
  const x = window.event.layerX;
  const y = window.event.layerY;
  ctx.fillStyle = currentColor || color;
  ctx.fillRect(Math.floor(x / sizePixel) * sizePixel, Math.floor(y / sizePixel)
* sizePixel, sizePixel, sizePixel);
}

const countRef = count;
const sizePixelRef = sizePixel;
export { fill, countRef, sizePixelRef };
