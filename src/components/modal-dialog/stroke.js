import { sizePixelRef, defineColor } from './fill';
import { ctx } from './global';

function startStrokeDraw(event) {
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.moveTo(event.layerX, event.layerY);
}

function finishStrokeDraw(event) {
  ctx.lineTo(event.layerX, event.layerY);
  ctx.closePath();
  const colour = defineColor();
  ctx.lineCap = 'square';
  ctx.strokeStyle = colour;
  ctx.lineWidth = sizePixelRef;
  ctx.stroke();
}

export { startStrokeDraw, finishStrokeDraw };
