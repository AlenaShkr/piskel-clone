export default function renderPreview() {
  const previewHtml = `<div class="preview">
                      <div class="preview-animation"></div>
                      <div class="fps-panel">
                          <div class="value-fps">0fps</div>
                          <input class="fps" type="range" min="0" max="20" step="1" value="0">
                      </div>
                      </div>`;

  const preview = window.document.querySelector('.main-preview');
  preview.innerHTML = previewHtml;

  window.document.querySelector('.fps').addEventListener('input', () => {
    const valueFps = window.document.querySelector('.fps').value;

    const fps = window.document.querySelector('.value-fps');
    fps.innerHTML = `${valueFps} FPS`;
  });
}
