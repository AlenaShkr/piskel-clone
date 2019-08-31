import { rgbToHex } from './toHexUtilit';

const canvas = window.document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

function defineColor(coordX, coordY) {
  const pixel = ctx.getImageData(coordX, coordY, 1, 1);
  const dataColor = pixel.data;

  return dataColor;
}

function pick() {
  const x = window.event.layerX;
  const y = window.event.layerY;
  const colour = defineColor(x, y);
  const r = colour[0];
  const g = colour[1];
  const b = colour[2];

  return rgbToHex(r, g, b);
}

export { pick, defineColor };
