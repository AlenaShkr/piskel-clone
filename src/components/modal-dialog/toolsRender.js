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
    <div class="button-mirrorpen"></div>
    <div class="button-bucket"></div>
    <div class="button-paintall"></div>
    <div class="button-eraser"></div>
    <div class="button-stroke"></div>
    <div class="button-rectangle"></div>
    <div class="button-circle"></div>
    <div class="button-moove"></div>
    <div class="button-shape"></div>
    <div class="button-lightening"></div>
    <div class="button-dithering"></div>
    <div class="button-picker"></div>
    </div>
    <div class="picker-box"></div>`;

  const tools = window.document.querySelector('.main-tools');
  tools.innerHTML = toolsHtml;
}
