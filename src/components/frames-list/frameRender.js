export default function renderFrames() {
  const frameHtml = `<button class="btn-addframe"><div></div>Add frame</button>
<div class="frame-panel">       
<div class="frame-current">
    <div class="btn-frame">
            <div class="number-frame">1</div>
            <button class="delete-frame"></button>
    </div>
    <div class="preview-frame"></div>
    <div class="btn-frame">
            <button class="replace-frame"></button>
            <button class="duplicate-frame"></button>
    </div>
</div>
</div>

</div>`;

  const frameBlock = window.document.querySelector('.main-frames');
  frameBlock.innerHTML = frameHtml;
}
