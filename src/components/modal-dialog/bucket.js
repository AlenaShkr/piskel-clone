import { defineColor } from './fill';

const canvas = window.document.querySelector('.canvas');

const ctx = canvas.getContext('2d');

export default function paintAll() {
  ctx.fillStyle = defineColor();
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}
