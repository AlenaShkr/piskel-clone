export default function drawVerticalMenu() {
  const verticalMenu = ` <div class="menu-vertical">
                          <div class="btn-save">Save</div>
                        </div>
                        <div class="drawing-menu">
                        <div class="drawing-content"></div>
                        </div>
                        </div>`;
  const menuBlock = window.document.querySelector('.main-menu-vertical');
  menuBlock.innerHTML = verticalMenu;
  const menu = window.document.querySelector('.menu-vertical');
  const drawingMenu = window.document.querySelector('.drawing-menu');
  const content = window.document.querySelector('.drawing-content');
  const btnSave = window.document.querySelector('.btn-save');

  let isShow = false;

  function show() {
    menu.style.right = '220px';
    drawingMenu.style.width = '0px';

    content.style.display = 'block';
  }
  function close() {
    menu.style.right = '0px';
    drawingMenu.style.width = '0px';

    content.style.display = 'none';
  }

  btnSave.addEventListener('click', () => {
    if (isShow === false) {
      show();
      isShow = true;
    } else {
      close();
      isShow = false;
    }
  });
}
