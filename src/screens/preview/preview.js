function handlerClickFPS() {
  const saveFrame = document.querySelectorAll('.frame');
  const screenPreview = document.querySelector('.preview-animation');

  const fps = document.querySelector('.fps').value;

  const countFrame = saveFrame.length;
  let i = 0;

  const step = function stepInt() {
    if (i < countFrame) {
      screenPreview.style.backgroundSize = 'cover';
      screenPreview.style.backgroundImage = saveFrame[i].style.backgroundImage;
      i += 1;
    }
  };
  setInterval(step, 1000 / fps);
}

function handlerFullScreen(element) {
  element.target.parentNode.webkitRequestFullscreen();
}

export default function preview() {
  const countFPS = document.querySelector('.fps');
  countFPS.addEventListener('input', handlerClickFPS);

  const screenPreview = document.querySelector('.preview-animation');
  screenPreview.addEventListener('dblclick', handlerFullScreen);
}
