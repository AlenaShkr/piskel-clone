import { startDraw, draw, finishDraw } from '../../components/modal-dialog/pen';
import pick from '../../components/modal-dialog/picker';
import paintAll from '../../components/modal-dialog/bucket';

let currentTool = '';
export default function init() {
  const canvas = window.document.querySelector('.canvas');
  const ctx = canvas.getContext('2d');
  const eventTool = window.document.querySelector('.buttons');

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
        canvas.removeEventListener('click', pick);
        canvas.removeEventListener('click', paintAll);
        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', finishDraw);
      }
      if (currentTool === 'button-eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        canvas.removeEventListener('click', pick);
        canvas.removeEventListener('click', paintAll);
      }

      if (currentTool === 'button-picker') {
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('click', paintAll);
        canvas.addEventListener('click', pick);
      }

      if (currentTool === 'button-paintall') {
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', finishDraw);
        canvas.removeEventListener('click', pick);
        canvas.addEventListener('click', paintAll);
      }
    }
  }

  eventTool.addEventListener('click', defineTool);
}
