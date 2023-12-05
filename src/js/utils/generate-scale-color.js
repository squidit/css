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

function createColor (colorName, hexColor) {
  const colorArray = generateBrightnessScale(hexColor);
  const cssVariables = generateCSSVariables(colorName, colorArray);
  return {
    name: colorName,
    hex: hexColor,
    scale: colorArray,
    cssVariables: cssVariables
  };
}

function createInCss (colorName, hexColor) {
  const colorResponse = createColor(colorName, hexColor);
  const styleTag = document.createElement('style');
  styleTag.setAttribute('type', 'text/css');
  styleTag.innerHTML = colorResponse.cssVariables;
  document.head.appendChild(styleTag);
}

function createColorDiv (color) {
  const colorBox = document.createElement('div');
  colorBox.className = 'box p-0 m-0';
  colorBox.style.borderRadius = '5px';

  const colorInfo = document.createElement('div');
  colorInfo.className = `py-3 text-center white-html background-${color}-50`;

  const colorName = document.createElement('p');
  colorName.style.textTransform = 'capitalize';
  colorName.textContent = color;

  const colorVar = document.createElement('p');
  colorVar.style.fontSize = '0.86rem';
  colorVar.textContent = `Default: var(--${color}-50)`;

  colorInfo.appendChild(colorName);
  colorInfo.appendChild(colorVar);

  colorBox.appendChild(colorInfo);

  for (let i = 5; i <= 95; i += 5) {
    const colorDiv = document.createElement('div');
    colorDiv.className = `py-2 text-center white-html background-${color}-${i}`;
    colorDiv.textContent = `var(--${color}-${i})`;

    colorBox.appendChild(colorDiv);
  }

  return colorBox;
}

async function renderColors () {
  const colors = [
    'neutral',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'aqua',
    'blue',
    'lilac',
    'instagram',
    'youtube',
    'pinterest',
    'google',
    'whatsapp',
    'twitter',
    'linkedin',
    'facebook',
    'x',
    'tiktok',
    'twitch'
  ]

  const div = document.createElement('div');
  div.style.display = 'grid';
  div.style.gridTemplateColumns = 'repeat(3, 1fr)';
  div.style.gap = '1.5rem';

  for (const color of colors) {
    div.appendChild(createColorDiv(color))
  }

  const colorsDiv = document.getElementById('colors');
  colorsDiv.appendChild(div);
}

if (typeof window !== 'undefined') {
  window.onload = function () {
    renderColors();
  };
}
