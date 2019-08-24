import { fill } from './fill';
import { ctx } from './global';

let isDraw = false;

function startDraw(event, color) {
  isDraw = true;
  ctx.beginPath();
  ctx.moveTo(event.layerX, event.layerY);
  fill(color);
}

function draw(event, color) {
  if (isDraw) {
    ctx.lineTo(event.layerX, event.layerY);
    fill(color);
  }
}

function finishDraw() {
  isDraw = false;
  ctx.closePath();
}

export { startDraw, draw, finishDraw };
