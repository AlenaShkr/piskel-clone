const canvas = window.document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

export default function pick() {
  const x = window.event.layerX;
  const y = window.event.layerY;

  const pixel = ctx.getImageData(x, y, 1, 1);
  const dataColor = pixel.data;

  const rgba = `rgba(${dataColor[0]},${dataColor[1]},${dataColor[2]},${dataColor[3]})`;

  const colorBox = window.document.querySelector('.picker-box');
  colorBox.style.backgroundColor = rgba;
  return rgba;
}
