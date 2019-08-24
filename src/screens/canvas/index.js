import { startDraw, draw, finishDraw } from '../../components/modal-dialog/pen';
import { pick } from '../../components/modal-dialog/picker';
import paintAll from '../../components/modal-dialog/bucket';
import { canvas } from '../../components/modal-dialog/global';
import { startStrokeDraw, finishStrokeDraw } from '../../components/modal-dialog/stroke';
import lighteningAndDithering from '../../components/modal-dialog/lightening';

let currentTool = '';

const currentCoordinateCanvas = window.document.querySelector('.information-coordinate');
const sizeCanvas = window.document.querySelector('.information-size');

function defineColor() {
  const colorBox = window.document.querySelector('.picker-box');
  const color = pick();
  colorBox.style.backgroundColor = color;
}

function setPrimaryColor(color) {
  const colorBoxPrimary = window.document.querySelector('.picker-input');

  colorBoxPrimary.value = color;
}

function setSecondaryColor(color) {
  const colorBoxPrimary = window.document.querySelectorAll('.picker-input');

  colorBoxPrimary[1].value = color;
}

function defineCoordinate(count) {
  const x = window.event.layerX;
  const y = window.event.layerY;

  const pix = canvas.width / count;
  const coordinateXDefineCount = Math.floor(x / pix);
  const coordinateYDefineCount = Math.floor(y / pix);

  return `${coordinateXDefineCount}:${coordinateYDefineCount}`;
}

function handleSetNullCoordinate() {
  currentCoordinateCanvas.textContent = '00:00';
}

function handleLightening() {
  lighteningAndDithering('+');
}

function handleDithering() {
  lighteningAndDithering('-');
}

export default function init() {
  const ctx = canvas.getContext('2d');
  const eventTool = window.document.querySelector('.buttons');

  canvas.addEventListener('mousemove', () => {
    const count = parseInt(sizeCanvas.textContent, 10);
    const coordinates = defineCoordinate(count);
    currentCoordinateCanvas.textContent = coordinates;
  });
  canvas.addEventListener('mouseleave', handleSetNullCoordinate);

  function defineTool(e) {
    if (e.target.parentElement.className === 'buttons') {
      if (currentTool === '') {
        currentTool = e.target.className;
        e.target.style.backgroundColor = 'aqua';
      } else {
        window.document.querySelector(`.${currentTool}`).style.backgroundColor = '#2d2d2d';
        currentTool = e.target.className;
        e.target.style.backgroundColor = 'aqua';
      }
      if (currentTool === 'button-pen') {
        ctx.globalCompositeOperation = 'source-over';

        canvas.removeEventListener('mousemove', defineColor);
        canvas.removeEventListener('click', setPrimaryColor);
        canvas.removeEventListener('click', paintAll);
        canvas.removeEventListener('mousedown', startStrokeDraw);
        canvas.removeEventListener('mouseup', finishStrokeDraw);
        canvas.removeEventListener('click', handleLightening);
        canvas.removeEventListener('click', handleDithering);

        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', finishDraw);
      }
      if (currentTool === 'button-eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        canvas.removeEventListener('mousemove', defineColor);
        canvas.removeEventListener('click', setPrimaryColor);
        canvas.removeEventListener('click', paintAll);
        canvas.removeEventListener('mousedown', startStrokeDraw);
        canvas.removeEventListener('mouseup', finishStrokeDraw);
        canvas.removeEventListener('click', handleLightening);
        canvas.removeEventListener('click', handleDithering);
      }

      if (currentTool === 'button-picker') {
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('click', paintAll);
        canvas.removeEventListener('mousedown', startStrokeDraw);
        canvas.removeEventListener('mouseup', finishStrokeDraw);
        canvas.removeEventListener('click', handleLightening);
        canvas.removeEventListener('click', handleDithering);

        canvas.addEventListener('mousemove', defineColor);
        canvas.addEventListener('click', () => {
          const color = pick();
          setPrimaryColor(color);
        });
        canvas.addEventListener('contextmenu', (ev) => {
          ev.preventDefault();
          const color = pick();
          setSecondaryColor(color);
        });
      }

      if (currentTool === 'button-paintall') {
        ctx.globalCompositeOperation = 'source-over';
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('mousemove', defineColor);
        canvas.removeEventListener('click', setPrimaryColor);
        canvas.removeEventListener('mousedown', startStrokeDraw);
        canvas.removeEventListener('mouseup', finishStrokeDraw);
        canvas.removeEventListener('click', handleLightening);
        canvas.removeEventListener('click', handleDithering);

        canvas.addEventListener('click', paintAll);
      }

      if (currentTool === 'button-stroke') {
        ctx.globalCompositeOperation = 'source-over';
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('mousemove', defineColor);
        canvas.removeEventListener('click', setPrimaryColor);
        canvas.removeEventListener('click', paintAll);
        canvas.removeEventListener('click', handleLightening);
        canvas.removeEventListener('click', handleDithering);

        canvas.addEventListener('mousedown', startStrokeDraw);
        canvas.addEventListener('mouseup', finishStrokeDraw);
      }

      if (currentTool === 'button-lightening') {
        ctx.globalCompositeOperation = 'source-over';
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('mousemove', defineColor);
        canvas.removeEventListener('click', setPrimaryColor);
        canvas.removeEventListener('click', paintAll);
        canvas.removeEventListener('mousedown', startStrokeDraw);
        canvas.removeEventListener('mouseup', finishStrokeDraw);
        canvas.removeEventListener('click', handleDithering);

        canvas.addEventListener('click', handleLightening);
      }

      if (currentTool === 'button-dithering') {
        ctx.globalCompositeOperation = 'source-over';
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('mousemove', defineColor);
        canvas.removeEventListener('click', setPrimaryColor);
        canvas.removeEventListener('click', paintAll);
        canvas.removeEventListener('mousedown', startStrokeDraw);
        canvas.removeEventListener('mouseup', finishStrokeDraw);
        canvas.removeEventListener('click', handleLightening);

        canvas.addEventListener('click', handleDithering);
      }
    }
  }

  eventTool.addEventListener('click', defineTool);
}
