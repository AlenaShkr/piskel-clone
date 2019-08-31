import { sizePixelRef as sizePixel } from './fill';
import { ctx } from './global';
import { rgbToHSl } from './toHexUtilit';
import { defineColor } from './picker';

export default function lighteningAndDithering(operator) {
  const x = window.event.layerX;
  const y = window.event.layerY;

  const colourRGB = defineColor(x, y);

  const hslColour = rgbToHSl(colourRGB[0], colourRGB[1], colourRGB[2]);
  let l = hslColour[2];
  if (operator === '+') {
    l += 5;
  } else {
    l -= 5;
  }
  hslColour.splice(-1, 1, l);
  const colour = `hsl(${hslColour[0]},${hslColour[1]}%,${hslColour[2]}%)`;
  ctx.fillStyle = colour;
  ctx.fillRect(Math.floor(x / sizePixel) * sizePixel, Math.floor(y / sizePixel)
 * sizePixel, sizePixel, sizePixel);
}
