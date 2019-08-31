function componentToHex(component) {
  const hex = component.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(r, g, b) {
  return `#${componentToHex(r) + componentToHex(g) + componentToHex(b)}`;
}

function rgbToHSl(value1, value2, value3) {
  let r = value1;
  let g = value2;
  let b = value3;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    if (l < 0.5) {
      s = (max - min) / (max + min);
    } else {
      s = (max - min) / (0.2 - max - min);
    }
    if (r === max) {
      h = (g - b) / (max - min);
    } else if (g === max) {
      h = 2 + (b - r) / (max - min);
    } else {
      h = 4 + (r - g) / (max - min);
    }
  }
  h *= 60;
  if (h < 0) {
    h += 360;
  }
  return [h, s * 100, l * 100];
}

export { componentToHex, rgbToHex, rgbToHSl };
