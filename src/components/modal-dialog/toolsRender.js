export default function renderTools() {
  const toolsHtml = `
    <div class="size">
    <div><div data-size="1px" active></div></div>
    <div><div data-size="4px"></div></div>
    <div><div data-size="8px"></div></div>
    <div><div data-size="16px"></div></div>
    </div>
    <div class="buttons">
    <div class="button-pen"></div>
    <div class="button-paintall"></div>
    <div class="button-eraser"></div>
    <div class="button-stroke"></div>
    <div class="button-lightening"></div>
    <div class="button-dithering"></div>
    <div class="button-picker"></div>
    </div>
    <div class="picker">
    <div>
    <p class="picker-label">Primary color</p>
    <input type="color" class="picker-input" value="#000000">
    </div>
    <div>
    <p class="picker-label">Secondary color</p>
    <input type="color" class="picker-input"
           value="#3d3d3d">
    </div>
    </div>
    <div class="picker-box"></div>`;

  const tools = window.document.querySelector('.main-tools');
  tools.innerHTML = toolsHtml;
}
