import renderTools from './components/modal-dialog/toolsRender';
import renderPrewiev from './screens/preview/previewRender';
import renderFrames from './components/frames-list/frameRender';
import drawVerticalMenu from './components/loading/verticalMenu';
import init from './screens/canvas/index';
import frameFunc from './components/frames-list/frame';

window.onload = function load() {
  renderTools();
  renderPrewiev();
  renderFrames();
  drawVerticalMenu();
  init();
  frameFunc();
};
