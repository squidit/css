function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

function rgbToHex (r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) { r = '0' + r; }
  if (g.length === 1) { g = '0' + g; }
  if (b.length === 1) { b = '0' + b; }

  return '#' + r + g + b;
}

function mix (color1, color2, i) {
  const weight = i <= 50 ? i / 50 : 1 - ((i - 50) / 50);

  const rgbColor1 = hexToRgb(color1);
  const rgbColor2 = hexToRgb(color2);

  let r = rgbColor1.r * (1 - weight) + rgbColor2.r * weight;
  let g = rgbColor1.g * (1 - weight) + rgbColor2.g * weight;
  let b = rgbColor1.b * (1 - weight) + rgbColor2.b * weight;

  // Ensure RGB values are within the valid range
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return rgbToHex(r, g, b);
}

function generateBrightnessScale (hexColor, step = 5) {
  const scale = [];
  for (let i = 0; i <= 100; i += step) {
    const color = mix(i > 50 ? '#ffffff' : '#000000', hexColor, i);
    scale.push({
      color: color,
      brightness: i
    });
  }
  return scale;
}

function generateCSSVariables (colorName, colorArray) {
  let cssVariables = ':root {\n';
  colorArray.forEach(({ color, brightness }) => {
    cssVariables += `  --${colorName}-${brightness}: ${color};\n`;
  });
  cssVariables += '}';
  return cssVariables;
}
