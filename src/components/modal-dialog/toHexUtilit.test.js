import { componentToHex, rgbToHex, rgbToHSl } from './toHexUtilit';

describe('test for utilits for transform from rgb to hex', () => {
  it('should get 16-number if number < 16', () => {
    const component = 1;
    expect(componentToHex(component)).toBe('01');
  });

  it('should get 16-number if number > 16', () => {
    const component = 32;
    expect(componentToHex(component)).toBe('20');
  });

  it('should right translate with 0', () => {
    const color = { r: 0, g: 0, b: 0 };
    const { r, g, b } = color;
    expect(rgbToHex(r, g, b)).toBe('#000000');
  });

  it('should right translate limit value', () => {
    const color = { r: 255, g: 255, b: 255 };
    const { r, g, b } = color;
    expect(rgbToHex(r, g, b)).toBe('#ffffff');
  });
});

describe('test for utilits for transform from rgb to hsl', () => {
  it('should right translate with 0', () => {
    const color = { r: 0, g: 0, b: 0 };
    const { r, g, b } = color;
    expect(rgbToHSl(r, g, b)).toStrictEqual([0, 0, 0]);
  });

  it('should right translate limit value', () => {
    const color = { r: 255, g: 255, b: 255 };
    const { r, g, b } = color;
    expect(rgbToHSl(r, g, b)).toStrictEqual([0, 0, 100]);
  });
});
