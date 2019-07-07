import preview from '../../screens/preview/preview';
import { countRef as count, sizePixelRef as sizePixel } from '../modal-dialog/fill';

const stateCanvas = [];
const stateFrame = [];
let countFrame = 1;
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

function cleanCanvas() {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = '#1d1d1d';
  ctx.moveTo(0, 0);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function saveJPG() {
  const imageJPG = canvas.toDataURL('image/jpg', 1);
  return imageJPG;
}

function saveStateCanvas() {
  for (let j = 0; j < count; j += 1) {
    const tempArray = [];
    for (let i = 0; i < count; i += 1) {
      const img = ctx.getImageData(i * sizePixel, j * sizePixel, sizePixel, sizePixel);
      const dataColor = img.data;

      const rgba = `rgba(${dataColor[0]},${dataColor[1]},${dataColor[2]},${dataColor[3]})`;
      tempArray[i] = rgba;
    }

    stateCanvas.push(tempArray);
  }
  return stateCanvas;
}

function redrawFrame(numberFrame) {
  const frame = stateFrame[numberFrame];
  for (let j = 0; j < count; j += 1) {
    for (let i = 0; i < count; i += 1) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = frame[j][i];
      ctx.fillRect(i * sizePixel, j * sizePixel, sizePixel, sizePixel);
    }
  }
}

function changeOnNonActiveState(element) {
  const frameCurrent = element;
  frameCurrent.className = 'frame';
  frameCurrent.querySelector('.delete-frame').style.visibility = 'visible';
  frameCurrent.querySelector('.duplicate-frame').style.visibility = 'visible';
  frameCurrent.querySelector('.replace-frame').style.visibility = 'visible';
}

function redrawNumber(number) {
  const numberFrame = document.querySelectorAll('.number-frame');
  for (let i = 0; i < number; i += 1) {
    numberFrame[i].textContent = i + 1;
  }
}

function handlerBtnDelete(e) {
  const removedFrame = e.target.parentNode.parentNode;
  const position = removedFrame.querySelector('.number-frame').textContent - 1;
  stateFrame.splice(position, 1);

  countFrame -= 1;
  removedFrame.remove();
  redrawNumber(countFrame);
}

function handlerRedrawFrame(e) {
  const numberFrame = e.target.parentNode.querySelector('.number-frame');
  const position = numberFrame.textContent - 1;
  stateFrame.splice(position + 1, 1, saveStateCanvas());
  const currentFrame = document.querySelector('.frame-current');
  const numberCurrentFrame = currentFrame.querySelector('.number-frame').textContent;
  stateFrame.splice(numberCurrentFrame - 1, 1, saveStateCanvas());
  currentFrame.style.backgroundSize = 'cover';
  currentFrame.style.backgroundImage = `url(${saveJPG()})`;
  changeOnNonActiveState(currentFrame);

  e.target.parentNode.className = 'frame-current';

  redrawFrame(position);
}

function handlerBtnDuplicate(e) {
  const copyingFrame = e.target.parentNode.parentNode;
  const position = copyingFrame.querySelector('.number-frame').textContent - 1;
  stateFrame.splice(position + 1, 0, stateFrame[position]);
  const copiedFrame = copyingFrame.cloneNode(true);

  const btnDeleteFrame = copiedFrame.querySelector('.delete-frame');
  btnDeleteFrame.addEventListener('click', handlerBtnDelete);

  const btnDuplicateFrame = copiedFrame.querySelector('.duplicate-frame');
  btnDuplicateFrame.addEventListener('click', handlerBtnDuplicate);
  const frames = copiedFrame.querySelector('.preview-frame');
  frames.addEventListener('click', handlerRedrawFrame);

  const framePanel = copyingFrame.parentNode;
  framePanel.insertBefore(copiedFrame, copyingFrame.nextSibling);

  countFrame += 1;
  redrawNumber(countFrame);
}

function handlerAddFrame(newFrame) {
  const frame = window.document.querySelector('.frame-current');
  changeOnNonActiveState(frame);
  const addFrame = newFrame.cloneNode(true);

  stateFrame.push(saveStateCanvas());
  frame.style.backgroundSize = 'cover';
  frame.style.backgroundImage = `url(${saveJPG()})`;

  countFrame += 1;

  const framePanel = document.querySelector('.frame-panel');
  framePanel.appendChild(addFrame);

  redrawNumber(countFrame);

  const previewFr = addFrame.querySelector('.preview-frame');
  previewFr.addEventListener('click', handlerRedrawFrame);

  const btnDeleteFrame = document.querySelector('.delete-frame');
  btnDeleteFrame.addEventListener('click', handlerBtnDelete);

  const btnDuplicateFrame = document.querySelector('.duplicate-frame');
  btnDuplicateFrame.addEventListener('click', handlerBtnDuplicate);
  const frames = document.querySelector('.preview-frame');
  frames.addEventListener('click', handlerRedrawFrame);
}


export default function frameFunc() {
  const frame = window.document.querySelector('.frame-current');
  const newFrame = frame.cloneNode(true);

  const btnAddFrame = document.querySelector('.btn-addframe');

  btnAddFrame.addEventListener('click', () => {
    handlerAddFrame(newFrame);
    cleanCanvas();
    ctx.globalCompositeOperation = 'source-over';
    preview();
  });
}
