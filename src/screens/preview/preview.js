function handleClickFPS() {
  const saveFrame = document.querySelectorAll('.frame');
  const screenPreview = document.querySelector('.preview-animation');

  const fps = document.querySelector('.fps').value;

  const countFrame = saveFrame.length;
  let i = 0;

  const step = function stepInt() {
    if (i < countFrame) {
      screenPreview.style.backgroundSize = 'contain';
      screenPreview.style.backgroundRepeat = 'no-repeat';
      screenPreview.style.backgroundPositionX = '50%';

      screenPreview.style.backgroundImage = saveFrame[i].style.backgroundImage;
      i += 1;
    }
  };
  setInterval(step, 1000 / fps);
}

function handleFullScreen(element) {
  element.target.parentNode.webkitRequestFullscreen();
}

export default function preview() {
  const countFPS = document.querySelector('.fps');
  countFPS.addEventListener('input', handleClickFPS);

  const screenPreview = document.querySelector('.preview-animation');
  screenPreview.addEventListener('dblclick', handleFullScreen);
}
