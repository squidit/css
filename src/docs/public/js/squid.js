// Global Variables or functions here

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

const tokenRoles = [
  {
    name: 'neutral',
    color: 'neutral',
    description: 'Usado como padrão para textos e elementos de interface secundários.'
  },
  {
    name: 'brand',
    color: 'pink',
    description: 'Usado para ações primárias e elementos que reforcem a comunicação da marca Squid.'
  },
  {
    name: 'information',
    color: 'blue',
    description: 'Usado para elementos da interface que apresentem um caráter informativo atribuído a eles.'
  },
  {
    name: 'discovery',
    color: 'purple',
    description: 'Usado para elementos da interface que comuniquem algo novo, como um onboarding ou informações de uma nova feature.'
  },
  {
    name: 'success',
    color: 'green',
    description: 'Faltando adicionar a descrição da cor.'
  },
  {
    name: 'warning',
    color: 'yellow',
    description: 'Faltando adicionar a descrição da cor.'
  },
  {
    name: 'danger',
    color: 'red',
    description: 'Faltando adicionar a descrição da cor.'
  },
  {
    name: 'highlight',
    color: 'aqua',
    description: 'Usado para cores que não tenham nenhum significado específico vinculado a elas. Você poderá trocar uma cor de destaque por outra e a experiência permanecerá inalterada.'
  }
];

const tokens = [
  textIcon = [
    neutral = [
      '--color_text-icon_neutral_primary',
      '--color_text-icon_neutral_secondary',
      '--color_text-icon_neutral_tertiary',
      '--color_text-icon_neutral_disabled',
      '--color_text-icon_neutral_inverse',
      '--color_text-icon_neutral_placeholder'
    ],
    brand = [
      '--color_text-icon_brands_wake',
      '--color_text-icon_brands_squid'
    ],
    system = [
      '--color_text-icon_system_danger',
      '--color_text-icon_system_warning',
      '--color_text-icon_system_success',
      '--color_text-icon_system_information',
      '--color_text-icon_system_discovery'
    ],
    universal = [
      '--color_text-icon_universal_black_primary',
      '--color_text-icon_universal_black_secondary',
      '--color_text-icon_universal_black_tertiary',
      '--color_text-icon_universal_black_disabled',
      '--color_text-icon_universal_white_primary',
      '--color_text-icon_universal_white_secondary',
      '--color_text-icon_universal_white_tertiary',
      '--color_text-icon_universal_white_disabled',
      '--color_text-icon_universal_brand_wake',
      '--color_text-icon_universal_brand_squid'
    ],
    hightlight = [
      '--color_text-icon_highlight_orange',
      '--color_text-icon_highlight_aqua'
    ],
    social = [
      '--color_text-icon_social_instagram',
      '--color_text-icon_social_youtube',
      '--color_text-icon_social_pinterest',
      '--color_text-icon_social_google',
      '--color_text-icon_social_whatsapp',
      '--color_text-icon_social_twitter',
      '--color_text-icon_social_linkedin',
      '--color_text-icon_social_facebook',
      '--color_text-icon_social_twitch',
      '--color_text-icon_social_tiktok',
      '--color_text-icon_social_x'
    ],
    link = [
      '--color_text-icon_link'
    ]
  ],
  bg = [
    box = [
      neutral = [
        '--color_bg_box_neutral_primary',
        '--color_bg_box_neutral_primary_hover',
        '--color_bg_box_neutral_primary_inverse',
        '--color_bg_box_neutral_primary_inverse-hover',
        '--color_bg_box_neutral_secondary',
        '--color_bg_box_neutral_secondary_hover',
        '--color_bg_box_neutral_secondary_inverse',
        '--color_bg_box_neutral_secondary_inverse-hover',
        '--color_bg_box_neutral_disabled'
      ],
      brand = [
        '--color_bg_box_brands_wake',
        '--color_bg_box_brands_wake_hover',
        '--color_bg_box_brands_squid',
        '--color_bg_box_brands_squid_hover'
      ],
      system = [
        '--color_bg_box_system_danger',
        '--color_bg_box_system_danger_hover',
        '--color_bg_box_system_warning',
        '--color_bg_box_system_warning_hover',
        '--color_bg_box_system_success',
        '--color_bg_box_system_success_hover',
        '--color_bg_box_system_information',
        '--color_bg_box_system_information_hover',
        '--color_bg_box_system_discovery',
        '--color_bg_box_system_discovery_hover'
      ],
      hightlight = [
        '--color_bg_box_highlight_orange',
        '--color_bg_box_highlight_orange_hover',
        '--color_bg_box_highlight_aqua',
        '--color_bg_box_highlight_aqua_hover'
      ],
      social = [
        '--color_bg_box_social_instagram',
        '--color_bg_box_social_instagram_hover',
        '--color_bg_box_social_youtube',
        '--color_bg_box_social_youtube_hover',
        '--color_bg_box_social_pinterest',
        '--color_bg_box_social_pinterest_hover',
        '--color_bg_box_social_google',
        '--color_bg_box_social_google_hover',
        '--color_bg_box_social_whatsapp',
        '--color_bg_box_social_whatsapp_hover',
        '--color_bg_box_social_twitter',
        '--color_bg_box_social_twitter_hover',
        '--color_bg_box_social_linkedin',
        '--color_bg_box_social_linkedin_hover',
        '--color_bg_box_social_facebook',
        '--color_bg_box_social_facebook_hover',
        '--color_bg_box_social_twitch',
        '--color_bg_box_social_twitch_hover',
        '--color_bg_box_social_tiktok',
        '--color_bg_box_social_tiktok_hover',
        '--color_bg_box_social_x',
        '--color_bg_box_social_x_hover'
      ]
    ],
    button = [
      neutral = [
        '--color_bg_button',
        '--color_bg_button_hover',
        '--color_bg_button_inverse',
        '--color_bg_button_inverse-hover',
        '--color_bg_button_disabled'
      ],
      brand = [
        '--color_bg_button_brands_wake',
        '--color_bg_button_brands_wake_hover',
        '--color_bg_button_brands_wake_inverse-hover',
        '--color_bg_button_brands_squid',
        '--color_bg_button_brands_squid_hover',
        '--color_bg_button_brands_squid_inverse-hover'
      ],
      system = [
        '--color_bg_button_system_danger',
        '--color_bg_button_system_danger_hover',
        '--color_bg_button_system_danger_inverse-hover',
        '--color_bg_button_system_warning',
        '--color_bg_button_system_warning_hover',
        '--color_bg_button_system_warning_inverse-hover',
        '--color_bg_button_system_success',
        '--color_bg_button_system_success_hover',
        '--color_bg_button_system_success_inverse-hover',
        '--color_bg_button_system_information',
        '--color_bg_button_system_information_hover',
        '--color_bg_button_system_information_inverse-hover',
        '--color_bg_button_system_discovery',
        '--color_bg_button_system_discovery_hover',
        '--color_bg_button_system_discovery_inverse-hover'
      ],
      hightlight = [
        '--color_bg_button_highlight_orange',
        '--color_bg_button_highlight_orange_hover',
        '--color_bg_button_highlight_orange_inverse-hover',
        '--color_bg_button_highlight_aqua',
        '--color_bg_button_highlight_aqua_hover',
        '--color_bg_button_highlight_aqua_inverse-hover'
      ],
      social = [
        '--color_bg_button_social_instagram',
        '--color_bg_button_social_instagram_hover',
        '--color_bg_button_social_instagram_inverse-hover',
        '--color_bg_button_social_youtube',
        '--color_bg_button_social_youtube_hover',
        '--color_bg_button_social_youtube_inverse-hover',
        '--color_bg_button_social_pinterest',
        '--color_bg_button_social_pinterest_hover',
        '--color_bg_button_social_pinterest_inverse-hover',
        '--color_bg_button_social_google',
        '--color_bg_button_social_google_hover',
        '--color_bg_button_social_google_inverse-hover',
        '--color_bg_button_social_whatsapp',
        '--color_bg_button_social_whatsapp_hover',
        '--color_bg_button_social_whatsapp_inverse-hover',
        '--color_bg_button_social_twitter',
        '--color_bg_button_social_twitter_hover',
        '--color_bg_button_social_twitter_inverse-hover',
        '--color_bg_button_social_linkedin',
        '--color_bg_button_social_linkedin_hover',
        '--color_bg_button_social_linkedin_inverse-hover',
        '--color_bg_button_social_facebook',
        '--color_bg_button_social_facebook_hover',
        '--color_bg_button_social_facebook_inverse-hover',
        '--color_bg_button_social_twitch',
        '--color_bg_button_social_twitch_hover',
        '--color_bg_button_social_twitch_inverse-hover',
        '--color_bg_button_social_tiktok',
        '--color_bg_button_social_tiktok_hover',
        '--color_bg_button_social_tiktok_inverse-hover',
        '--color_bg_button_social_x',
        '--color_bg_button_social_x_hover',
        '--color_bg_button_social_x_inverse-hover'
      ]
    ],
    input = [
      '--color_bg_input',
      '--color_bg_input_disabled'
    ]
  ],
  border = [
    box = [
      neutral = [
        '--color_border_box_neutral_primary',
        '--color_border_box_neutral_secondary',
        '--color_border_box_neutral_disabled'
      ],
      brand = [
        '--color_border_box_brands_wake',
        '--color_border_box_brands_squid'
      ],
      system = [
        '--color_border_box_system_danger',
        '--color_border_box_system_warning',
        '--color_border_box_system_success',
        '--color_border_box_system_information',
        '--color_border_box_system_discovery'
      ],
      hightlight = [
        '--color_border_box_highlight_orange',
        '--color_border_box_highlight_aqua'
      ],
      social = [
        '--color_border_box_social_instagram',
        '--color_border_box_social_youtube',
        '--color_border_box_social_pinterest',
        '--color_border_box_social_google',
        '--color_border_box_social_whatsapp',
        '--color_border_box_social_twitter',
        '--color_border_box_social_linkedin',
        '--color_border_box_social_facebook',
        '--color_border_box_social_twitch',
        '--color_border_box_social_tiktok',
        '--color_border_box_social_x'
      ]
    ],
    button = [
      neutral = [
        '--color_border_button_neutral'
      ],
      brand = [
        '--color_border_button_brands_wake',
        '--color_border_button_brands_squid'
      ],
      system = [
        '--color_border_button_system_danger',
        '--color_border_button_system_warning',
        '--color_border_button_system_success',
        '--color_border_button_system_information',
        '--color_border_button_system_discovery'
      ],
      hightlight = [
        '--color_border_button_highlight_orange',
        '--color_border_button_highlight_aqua'
      ],
      social = [
        '--color_border_button_social_instagram',
        '--color_border_button_social_youtube',
        '--color_border_button_social_pinterest',
        '--color_border_button_social_google',
        '--color_border_button_social_whatsapp',
        '--color_border_button_social_twitter',
        '--color_border_button_social_linkedin',
        '--color_border_button_social_facebook',
        '--color_border_button_social_twitch',
        '--color_border_button_social_tiktok',
        '--color_border_button_social_x'
      ]
    ],
    input = [
      '--color_border_input',
      '--color_border_input_hover',
      '--color_border_input_focus',
      '--color_border_input_disabled',
      '--color_border_input_error',
      '--color_border_input_success'
    ]
  ],
  surface = [
    '--color_surface_primary',
    '--color_surface_secondary',
    '--color_surface_tertiary',
    '--color_surface_primary_inverse',
    '--color_surface_secondary_inverse',
    '--color_surface_tertiary_inverse'
  ]
]

const tokensMap = {
  0: {
    name: 'Text Icon',
    maps: {
      0: 'neutral',
      1: 'brand',
      2: 'system',
      3: 'universal',
      4: 'highlight',
      5: 'social',
      6: 'link'
    }
  },
  1: {
    name: 'Background',
    maps: {
      0: {
        name: 'Box',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      1: {
        name: 'Button',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      2: {
        name: 'Input'
      }
    }
  },
  2: {
    name: 'Border',
    maps: {
      0: {
        name: 'Box',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      1: {
        name: 'Button',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      2: {
        name: 'Input'
      }
    }
  },
  3: 'Surface'
}

const buttons = [
  'neutral',
  'wake',
  'squid',
  'danger',
  'warning',
  'success',
  'information',
  'discovery',
  'orange',
  'aqua',
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
  'disabled',
  'rounded'
]

const buttonSizes = [
  { text: 'Small', value: 'sm' },
  { text: 'Medium/Default', value: '' },
  { text: 'Big', value: 'lg' },
  { text: 'Extra Large', value: 'xl' }
]

function renderButtons () {
  const target = document.getElementById('generated-buttons');
  if (target) {
    const sizes = document.createElement('div');
    sizes.className = 'mb-5'
    sizes.style.display = 'grid';
    sizes.style.gridTemplateColumns = 'repeat(4, 1fr)';
    sizes.style.gap = '1.5rem';

    for (const size of buttonSizes) {
      const div = document.createElement('div');

      const title = document.createElement('h6');
      title.textContent = size.text

      const button = document.createElement('button');
      button.className = `button button-primary ${size.value ? 'button-' + size.value : ''}`;
      button.style.width = '100%'
      button.textContent = 'Click me';

      div.appendChild(title)
      div.appendChild(button)

      sizes.appendChild(div)
    }

    target.appendChild(sizes);

    const div = document.createElement('div');

    for (const type of ['Default', 'Inverted']) {
      const title = document.createElement('h6');
      title.textContent = type;

      div.appendChild(title);

      const examples = document.createElement('div');
      examples.className = 'mb-5'
      examples.style.display = 'grid';
      examples.style.gridTemplateColumns = 'repeat(5, 1fr)';
      examples.style.gap = '1.5rem';

      for (const button of buttons) {
        const buttonElement = document.createElement('button');
        buttonElement.className = `button 
          ${['disabled', 'rounded'].includes(button) ? 'button-squid' : button ? 'button-' + button : ''} 
          ${type === 'Inverted' ? type.toLowerCase() : ''} 
          ${['disabled', 'rounded'].includes(button) ? button : ''}
        `;
        buttonElement.style.width = '100%'
        buttonElement.textContent = button;

        examples.appendChild(buttonElement);
      }

      div.appendChild(examples);
    }

    target.appendChild(div);
  }
}

function createTokenRoles (role) {
  const div = document.createElement('div');
  div.className = 'display-flex align-items-center py-1 px-3 mb-3'
  div.style.backgroundColor = 'var(--background)';
  div.style.maxWidth = 'fit-content';
  div.style.borderRadius = '4rem';
  div.style.gap = '1rem';

  const color = document.createElement('div');
  color.className = `background-${role.color}-50 p-3`
  color.style.borderRadius = '4rem';
  color.style.border = '1px solid var(--border_color)'

  div.appendChild(color);

  const name = document.createElement('strong');
  name.style.minWidth = 'min-content';
  name.textContent = role.name;

  div.appendChild(name)

  const dash = document.createElement('div');
  dash.textContent = '-';

  div.appendChild(dash)

  const description = document.createElement('p');
  description.className = 'm-0'
  description.textContent = role.description;

  div.appendChild(description)

  return div
}

function renderTokenRoles () {
  const target = document.getElementById('generated-token-roles');
  if (target) {
    for (const role of tokenRoles) {
      target.appendChild(createTokenRoles(role))
    }
  }
}

function createTokens (tokens) {
  const tokensDiv = document.createElement('div');
  tokensDiv.style.display = 'grid';
  tokensDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
  tokensDiv.style.gap = '1.5rem';

  for (const token of tokens) {
    const tokenDiv = document.createElement('div');
    tokenDiv.className = 'display-flex align-items-center py-1 px-3'
    tokenDiv.style.backgroundColor = 'var(--background)';
    tokenDiv.style.maxWidth = 'fit-content';
    tokenDiv.style.borderRadius = '4rem';
    tokenDiv.style.gap = '1rem';

    const color = document.createElement('div');
    color.style.backgroundColor = `var(${token})`;
    color.style.padding = '1rem';
    color.style.borderRadius = '4rem';
    color.style.border = '1px solid var(--border_color)'

    tokenDiv.appendChild(color);

    const name = document.createElement('strong');
    name.style.minWidth = 'min-content';
    name.textContent = token;

    tokenDiv.appendChild(name);

    tokensDiv.appendChild(tokenDiv);
  }

  return tokensDiv;
}

function createTypes (teste1, teste2) {
  const div = document.createElement('div');
  div.style.marginBottom = '1rem';

  const h3 = document.createElement('h3');
  h3.textContent = teste2.name || teste2

  div.appendChild(h3);

  if (teste2.maps) {
    for (const map of Object.keys(teste2.maps)) {
      const typeDiv = document.createElement('div');
      typeDiv.style.margin = '0 0 1rem 2rem';

      const h3 = document.createElement('h3');
      h3.style.textTransform = 'capitalize';
      h3.textContent = teste2.maps[map]?.name || teste2.maps[map];

      typeDiv.appendChild(h3);

      if (teste2.maps[map]?.maps) {
        for (const mapInside of Object.keys(teste2.maps[map]?.maps)) {
          const divInside = document.createElement('div');
          divInside.style.margin = '0 0 1rem 2rem';

          const h4 = document.createElement('h4');
          h4.style.textTransform = 'capitalize';
          h4.textContent = teste2.maps[map]?.maps[mapInside]

          divInside.appendChild(h4);

          divInside.appendChild(createTokens(teste1[map][mapInside]))

          typeDiv.appendChild(divInside);
        }
      } else {
        typeDiv.appendChild(createTokens(teste1[map]))
      }

      div.appendChild(typeDiv);
    }
  } else {
    div.appendChild(createTokens(teste1));
  }

  return div
}

function renderTokens () {
  const target = document.getElementById('generated-tokens');
  if (target) {
    Object.keys(tokensMap).forEach((key) => {
      target.appendChild(createTypes(tokens[key], tokensMap[key]))
    })
  }
}

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

function createColors (color) {
  const collapse = document.createElement('div');
  collapse.className = 'collapse';

  const collapseTitle = document.createElement('p');
  collapseTitle.className = `collapse-title white-html background-${color}-50`;

  const colorName = document.createElement('span');
  colorName.style.textTransform = 'capitalize';
  colorName.textContent = color;

  const defaultVar = document.createElement('span');
  defaultVar.id = 'default-var-accordion';
  defaultVar.textContent = `var(--${color}-50)`;

  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'center';

  div.appendChild(colorName);
  div.appendChild(defaultVar);

  collapseTitle.appendChild(div);

  const span = document.createElement('span');
  span.className = 'icon';

  const chevronDown = document.createElement('i');
  chevronDown.className = 'far fa-chevron-down';

  span.appendChild(chevronDown);

  collapseTitle.appendChild(span);

  collapse.appendChild(collapseTitle);

  const collapseBody = document.createElement('div');
  collapseBody.className = 'collapse-body p-0';

  for (let i = 5; i <= 95; i += 5) {
    const colorDiv = document.createElement('div');
    colorDiv.className = `py-2 text-center white-html background-${color}-${i}`;
    colorDiv.textContent = `var(--${color}-${i})`;

    collapseBody.appendChild(colorDiv);
  }

  collapse.appendChild(collapseBody);

  return collapse;
}

async function renderColors () {
  const target = document.getElementById('generated-colors');
  if (target) {
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.setAttribute('data-accordion', '');
    accordion.style.display = 'grid';
    accordion.style.gridTemplateColumns = 'repeat(3, 1fr)';
    accordion.style.gap = '1.5rem';

    for (const color of colors) {
      accordion.appendChild(createColors(color))
    }

    target.appendChild(accordion);
  }
}

// // Listen all events on document/window
const liveDom = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.hasAttribute) {
        if (node.hasAttribute('data-tabs')) {
          tabify(node)
        }
        if (node.hasAttribute('data-accordion')) {
          initAccordion(node)
        }
        if (node.hasAttribute('data-modal')) {
          node.addEventListener('click', (event) => createModal(event, node))
        }
      }
    })
  })
});

// To use live Realod Components
// liveDom.observe((document.documentElement || document.body), {
//   attributes: true,
//   childList: true,
//   subtree: true,
//   characterData: true
// });

function loadScript (file) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = file
  document.body.appendChild(script)
}

if (typeof window !== 'undefined') {
  window.onload = function () {
    renderColors();
    renderButtons();
    renderTokenRoles();
    renderTokens();
    (function () {
      [...document.querySelectorAll('[data-accordion]')].forEach(x => initAccordion(x))
    })();
  };
}

function applyDisplay (collapses, index) {
  if (collapses[index].children[0].children[0].children[1]) {
    if (collapses[index].classList.value.includes('active')) {
      collapses[index].children[0].children[0].children[1].style.display = ''
    } else {
      collapses[index].children[0].children[0].children[1].style.display = 'none'
    }
  }
}

function initAccordion (element) {
  const collapses = [...element.children]
  let currentTabIndex = 0

  function setTab (index) {
    if (index < 0) {
      return
    }
    if (collapses[index] && !collapses[index].classList.contains('collapse-disabled')) {
      if (currentTabIndex > -1) {
        if (element.classList.contains('only-one') && index !== currentTabIndex) {
          collapses[currentTabIndex].classList.remove('active')
          collapses[index].classList.add('active')
        } else {
          applyDisplay(collapses, index)
          collapses[index].classList.toggle('active')
        }
      } else if (!element.classList.contains('only-one')) {
        applyDisplay(collapses, index)
        collapses[index].classList.toggle('active')
      }
      currentTabIndex = index
    }
  }

  defaultTabIndex = collapses.findIndex(x => [...x.classList].indexOf('active') > -1)
  setTab(defaultTabIndex)
  // eslint-disable-next-line
  collapses.forEach((x, i) => x.onclick = event => setTab(i))
}

(function () {
  'use strict'
  let toClose = false

  document.addEventListener('click', function (e) {
    if (
      e.target.hasAttribute('data-dropdown') &&
      e.target.getAttribute('data-dropdown') !== 'false' &&
      e.target.getAttribute('data-dropdown') !== 'disabled'
    ) {
      if (e.target.classList.contains('dropdown-open')) {
        e.target.classList.remove('dropdown-open')
        closeDropdown(e)
      } else {
        e.target.classList.add('dropdown-open')
        openDropdown(e)
      }
    }
  })

  window.onclick = function (event) {
    if (toClose && toClose.classList) {
      const button = getButtonDropdownToClose(toClose)
      if (button && !button.contains(event.target) && !toClose.contains(event.target)) {
        button.classList.remove('dropdown-open')
        button.removeAttribute('data-dropdown-open')
        document.body.removeChild(toClose)
        toClose = false
      }
    }
  }

  function getButtonDropdownToClose (toClose) {
    const count = [...toClose.classList].find((className) => {
      return className.startsWith('dropdown-count')
    }).split('-')[2]
    return document.querySelector(`[data-dropdown-open="${count}"]`)
  }

  function closeDropdown (e) {
    if (e.target.hasAttribute('data-dropdown')) {
      toClose = false
      const numberDropdown = e.target.getAttribute('data-dropdown-open')
      setTimeout(function () {
        if (document.querySelector(`.dropdown-count-${numberDropdown}`)) {
          document.body.removeChild(document.querySelector(`.dropdown-count-${numberDropdown}`))
          e.target.removeAttribute('data-dropdown-open')
        }
      })
    }
  }

  function positionAt (parent, dropdown, posHorizontal, posVertical, distance) {
    const parentCoords = parent.getBoundingClientRect()
    let left
    let top
    switch (posHorizontal) {
      case 'left':
        left = parseInt(parentCoords.right) - dropdown.offsetWidth
        break
      // eslint-disable-next-line
      default:
      case 'right':
        left = parseInt(parentCoords.left)
    }

    switch (posVertical) {
      case 'bottom':
        top = parseInt(parentCoords.bottom) + distance
        break
      // eslint-disable-next-line
      default:
      case 'top':
        top = parseInt(parentCoords.top) - dropdown.offsetHeight - distance
    }

    left = (left < 0) ? parseInt(parentCoords.left) : left
    top = (top < 0) ? (parseInt(parentCoords.bottom) + distance) : top

    dropdown.style.left = left + 'px'
    dropdown.style.top = top + pageYOffset + 'px'
  }

  function openDropdown (e) {
    if (
      !e.target.hasAttribute('data-dropdown') ||
      e.target.getAttribute('data-dropdown') === 'false' ||
      e.target.getAttribute('data-dropdown') === 'disabled'
    ) {
      return
    }
    if (toClose && toClose.classList) {
      const button = getButtonDropdownToClose(toClose)
      button.classList.remove('dropdown-open')
      button.removeAttribute('data-dropdown-open')
      document.body.removeChild(toClose)
      toClose = false
    }
    let menu = e.target.nextSibling
    let foundDropdown = false
    while (!foundDropdown) {
      if (!menu || (menu.classList && menu.classList.contains('dropdown'))) {
        foundDropdown = true
        break
      }
      menu = menu.nextSibling
    }
    if (!menu || !menu.classList || (menu.classList && !menu.classList.contains('dropdown'))) {
      return
    }
    const className = e.target.getAttribute('data-dropdown-class') || ''
    const distance = e.target.getAttribute('data-dropdown-distance') || 3
    const width = e.target.getAttribute('data-dropdown-width') || e.target.offsetWidth
    const pos = e.target.getAttribute('data-dropdown-position') || 'right bottom'
    const dropdown = menu.cloneNode(true)
    const dropdownCount = (document.querySelectorAll('.dropdown.dropdown-generated').length + 1) || 1
    dropdown.className = `dropdown open dropdown-generated ${className} dropdown-count-${dropdownCount} dropdown-${pos.replace(' ', '-')}`
    e.target.setAttribute('data-dropdown-open', dropdownCount)
    dropdown.append(e.target.getAttribute('data-dropdown'))

    document.body.appendChild(dropdown)
    toClose = dropdown

    const posHorizontal = pos.split(' ')[0] || 'right'
    const posVertical = pos.split(' ')[1] || 'bottom'
    dropdown.style.width = width + 'px'

    positionAt(e.target, dropdown, posHorizontal, posVertical, distance)
  }
})();

const modals = document.querySelectorAll('[data-modal]')
modals.forEach(function (trigger) {
  trigger.addEventListener('click', (event) => createModal(event, trigger))
});

function createModal (event, trigger) {
  event.preventDefault()
  const modal = document.getElementById(trigger.dataset.modal)
  const backdrop = document.createElement('div')
  const dataBackdrop = modal.getAttribute('data-backdrop')
  backdrop.setAttribute('id', 'modal-backdrop')
  backdrop.setAttribute('class', 'modal-backdrop show')
  if (dataBackdrop !== 'static') {
    modal.addEventListener('click', (event) => {
      event.preventDefault()
      const modalDialog = modal.firstElementChild
      if (!modalDialog?.contains(event.target)) {
        if (backdrop.parentNode) {
          backdrop.parentNode.removeChild(backdrop)
        }
        modal.classList.remove('open')
        setTimeout(() => {
          modal.style.display = 'none'
          body.classList.remove('block')
        }, 500)
      }
    })
  }
  document.body.appendChild(backdrop)
  const body = document.getElementsByTagName('body')[0]
  body.classList.add('block')
  modal.style.display = 'flex'
  setTimeout(() => {
    modal.classList.add('open')
  }, 100)
  const exits = modal.querySelectorAll('.modal-exit')
  exits.forEach(function (exit) {
    exit.addEventListener('click', function (event) {
      event.preventDefault()
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop)
      }
      modal.classList.remove('open')
      setTimeout(() => {
        modal.style.display = 'none'
        body.classList.remove('block')
      }, 500)
    })
  })
};

function tabify (element) {
  const header = element.querySelector('.tabs-header') || { children: [] }
  const content = element.querySelector('.tabs-wrapper-content') || { children: [] }
  const tabHeaders = [...header.children]
  const tabContents = [...content.children]
  let currentTabIndex = -1

  function setTab (index) {
    if (index < 0) {
      return
    }
    if (tabHeaders[index] && !tabHeaders[index].classList.contains('disabled')) {
      if (currentTabIndex > -1) {
        if (tabHeaders[currentTabIndex]) {
          tabHeaders[currentTabIndex].classList.remove('active')
        }
        if (tabContents[currentTabIndex]) {
          tabContents[currentTabIndex].classList.remove('active')
        }
      }
      if (tabContents[index]) {
        tabContents[index].classList.add('active')
      }
      if (tabHeaders[index]) {
        tabHeaders[index].classList.add('active')
      }
      currentTabIndex = index
    }
  }

  defaultTabIndex = tabHeaders.findIndex(x => [...x.classList].indexOf('active') > -1)
  currentTabIndex = defaultTabIndex === -1 ? 0 : defaultTabIndex
  setTab(currentTabIndex)
  // eslint-disable-next-line
  tabHeaders.forEach((x, i) => x.onclick = event => setTab(i))
}

(function () {
  [...document.querySelectorAll('[data-tabs]')].forEach(x => tabify(x))
})();

(function () {
  'use strict'
  // Toast class based from https://github.com/talsu/vanilla-toast
  const Toast = (function () {
    function Toast () {
      this.queue = new TaskQueue()
      this.cancellationTokens = []
      this.element = null
    }

    const constants = {
      default: {
        className: '',
        fadeDuration: 400,
        fadeInterval: 16,
        duration: 10000,
        closeButton: false,
        immediately: false,
        notOverClick: false,
        onClick: null,
        persistent: false
      },
      success: {
        className: ''
      },
      inverted: {
        className: ''
      },
      info: {
        className: ''
      },
      warning: {
        className: ''
      },
      grayscale: {
        className: ''
      },
      custom: {
        className: ''
      },
      theme: {
        className: ''
      },
      discovery: {
        className: ''
      },
      error: {
        className: '',
        duration: 10000,
        closeButton: true
      }
    }

    Toast.prototype.initElement = function (option = {}, selector) {
      const container = document.createElement('div')
      const toastBox = document.createElement('div')
      const text = document.createElement('div')
      const closeButton = document.createElement('span')

      container.setAttribute('id', 'toast-container')
      container.setAttribute('class', 'toast-container')

      toastBox.setAttribute('id', 'toast')
      toastBox.setAttribute('class', 'toast')

      text.setAttribute('id', 'toast-text')
      text.setAttribute('class', 'toast-text')

      closeButton.setAttribute('id', 'toast-close-button')
      closeButton.setAttribute('class', 'toast-close-button')
      closeButton.innerHTML = '&#10006'

      toastBox.appendChild(text)
      toastBox.appendChild(closeButton)
      container.appendChild(toastBox)

      if (selector) {
        document.getElementById(seletor).appendChild(containter)
      } else {
        document.body.appendChild(container)
      }

      this.element = {
        container: container,
        toastBox: toastBox,
        text: text,
        closeButton: closeButton,
        persistent: option ? option.persistent : false
      }

      _setStyle(this, 'default', constants.default)
    }

    Toast.prototype.cancel = function () {
      if (this.cancellationTokens.length) this.cancellationTokens[0].cancel()
    }

    Toast.prototype.cancelAll = function () {
      const length = this.cancellationTokens.length
      for (let i = 0; i < length; i++) {
        (function (token) {
          token.cancel()
        })(this.cancellationTokens[length - i - 1])
      }
    }

    Toast.prototype.show = function (text, option, preset, callback) {
      const self = this
      if (!self.element) self.initElement(option)
      if (!option) option = {}
      if (option.immediately) self.cancelAll()

      const cancellationToken = new CancellationToken()
      self.queue.enqueue(function (next) {
        const fadeDuration = option.fadeDuration || constants.default.fadeDuration
        const fadeInterval = option.fadeInterval || constants.default.fadeInterval
        const fadeStep = Math.min(fadeInterval / fadeDuration, 1)
        const duration = option.duration || constants.default.duration

        self.element.closeButton.style.display =
          option.closeButton ? 'inline-block' : 'none'

        self.element.text.innerHTML = text

        const s = self.element.toastBox.style
        s.opacity = 0
        s.display = 'inline-grid'

        self.element.container.className = `toast-container ${(option && option.position) ? option.position : ''} ${option.closeButton ? 'has-close' : ''}`

        _setStyle(self, preset, option)

        let timeoutId = null

        const timeoutCallback = function () {
          timeoutId = null
          self.element.text.removeEventListener('click', executeFunction)
          self.element.toastBox.removeEventListener('click', cancelHandler)
          self.element.text.classList = 'toast-text'
          _hide(self, option, cancellationToken, function () {
            if (callback) callback()
            self.cancellationTokens.shift().dispose()
            next()
          })
        }

        const cancelHandler = function () {
          if (!timeoutId) return
          clearTimeout(timeoutId)
          timeoutCallback()
        }

        const executeFunction = function () {
          return option.onClick()
        }

        _fade(s, fadeStep, fadeInterval, cancellationToken, function () {
          if (!option.notOverClick && !constants.default.notOverClick) {
            self.element.toastBox.addEventListener('click', cancelHandler)
          } else {
            self.element.closeButton.addEventListener('click', cancelHandler)
            if (option.onClick && typeof option.onClick === 'function') {
              self.element.text.classList = 'toast-text clickable'
              self.element.text.addEventListener('click', executeFunction)
            }
          }
          if (cancellationToken.isCancellationRequested) {
            timeoutCallback()
          } else {
            timeoutId = setTimeout(timeoutCallback, duration)
            cancellationToken.register(function () {
              cancelHandler()
            })
          }
        })
      })

      self.cancellationTokens.push(cancellationToken)

      return self
    }

    for (const item in constants) {
      (function (preset) {
        Toast.prototype[preset] = function (text, option, callback) {
          if (!option) option = {}

          for (const propertyName in constants[preset]) {
            if (option[propertyName] === undefined) {
              option[propertyName] = constants[preset][propertyName]
            }
          }

          return this.show(text, option, preset, callback)
        }
      })(item)
    }

    function _setStyle (self, preset, option) {
      self.element.toastBox.className = `toast ${preset || 'default'} ${(option.notOverClick || constants.default.notOverClick) ? 'not-click' : ''} ${option.className || constants.default.className}`
    }

    function _hide (self, option, cancellationToken, callback) {
      if (!option) option = {}

      const fadeDuration = option.fadeDuration || constants.default.fadeDuration
      const fadeInterval = option.fadeInterval || constants.default.fadeInterval
      const fadeStep = Math.min(fadeInterval / fadeDuration, 1)

      const s = self.element.toastBox.style
      s.opacity = 1

      _fade(s, -fadeStep, fadeInterval, cancellationToken, function () {
        s.display = 'none'
        if (callback) callback()
      })

      return self
    }

    function _fade (style, step, interval, cancellationToken, callback) {
      (function fade () {
        if (cancellationToken.isCancellationRequested) {
          style.opacity = step < 0 ? 0 : 1
          if (callback) callback()
          return
        }
        style.opacity = Number(style.opacity) + step
        if (step < 0 && style.opacity < 0) {
          if (callback) callback()
        } else if (step > 0 && style.opacity >= 1) {
          if (callback) callback()
        } else {
          let timeoutId = setTimeout(function () {
            timeoutId = null
            fade()
          }, interval)
          cancellationToken.register(function () {
            if (!timeoutId) return
            clearTimeout(timeoutId)
            timeoutId = null
            if (callback) callback()
          })
        }
      })()
    }

    return Toast
  })()

  const CancellationToken = (function () {
    function CancellationToken () {
      this.isCancellationRequested = false
      this.cancelCallbacks = []
    }

    CancellationToken.prototype.cancel = function () {
      this.isCancellationRequested = true
      const copiedCallbacks = this.cancelCallbacks.slice()
      while (copiedCallbacks.length) copiedCallbacks.shift()()
    }

    CancellationToken.prototype.register = function (callback) {
      this.cancelCallbacks.push(callback)
    }

    CancellationToken.prototype.dispose = function () {
      while (this.cancelCallbacks.length) this.cancelCallbacks.shift()
    }

    return CancellationToken
  })()

  // TaskQueue class from https://github.com/talsu/async-task-queue
  const TaskQueue = (function () {
    function TaskQueue () {
      this.queue = []
      this.isExecuting = false
    }
    TaskQueue.prototype.enqueue = function (job) {
      this.queue.push(job)
      dequeueAndExecute(this)
    }

    function dequeueAndExecute (self) {
      if (self.isExecuting) return
      const job = self.queue.shift()
      if (!job) return
      self.isExecuting = true
      job(function () {
        self.isExecuting = false
        dequeueAndExecute(self)
      })
    }

    return TaskQueue
  })()

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = new Toast()
    }
    exports.Toast = new Toast()
  } else {
    this.Toast = new Toast()
  }
}.call(this));

window.onpopstate = (e) => {
  if (window.Toast && window.Toast.element && !window.Toast.element.persistent && window.Toast.element.closeButton) {
    window.Toast.element.closeButton.click()
  }
};

(function () {
  'use strict'
  document.body.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-tooltip') && e.target.getAttribute('data-tooltip-trigger') === 'click') {
      if (e.target.classList.contains('tooltip-open')) {
        e.target.classList.remove('tooltip-open')
        removeTooltip(e)
      } else {
        e.target.classList.add('tooltip-open')
        createTooltip(e)
      }
    }
  })

  document.body.addEventListener('mouseover', function (e) {
    if (e.target.hasAttribute('data-tooltip') && e.target.getAttribute('data-tooltip-trigger') !== 'click') {
      createTooltip(e)
    }
  })

  document.body.addEventListener('mouseout', function (e) {
    if (e.target.hasAttribute('data-tooltip') && e.target.getAttribute('data-tooltip-trigger') !== 'click') {
      removeTooltip(e)
    }
  })

  function createTooltip (e) {
    if (!e.target.hasAttribute('data-tooltip')) {
      return
    }
    const theme = e.target.getAttribute('data-tooltip-theme') || 'dark'
    const distance = e.target.getAttribute('data-tooltip-distance') || 7
    const pos = e.target.getAttribute('data-tooltip-position') || 'center bottom'
    const tooltip = document.createElement('div')
    const tooltipArrow = document.createElement('div')
    const tooltipCount = (document.querySelectorAll('.tooltip.tooltip-generated').length + 1) || 1
    tooltip.className = `tooltip tooltip-generated tooltip-${theme} tooltip-${tooltipCount} tooltip-${pos.replace(' ', '-')}`
    e.target.setAttribute('data-tooltip-open', tooltipCount)
    tooltipArrow.className = 'tooltip-arrow'
    tooltip.appendChild(tooltipArrow)
    tooltip.append(e.target.getAttribute('data-tooltip'))

    document.body.appendChild(tooltip)

    const posHorizontal = pos.split(' ')[0]
    const posVertical = pos.split(' ')[1]

    positionAt(e.target, tooltip, posHorizontal, posVertical, distance)
  }

  function removeTooltip (e) {
    if (e.target.hasAttribute('data-tooltip')) {
      const delay = e.target.getAttribute('data-tooltip-delay')
      const numberTooltip = e.target.getAttribute('data-tooltip-open')
      setTimeout(function () {
        if (document.querySelector(`.tooltip-${numberTooltip}`)) {
          document.body.removeChild(document.querySelector(`.tooltip-${numberTooltip}`))
        }
        e.target.removeAttribute('data-tooltip-open')
      }, delay || 0)
    }
  }

  function positionAt (parent, tooltip, posHorizontal, posVertical, distance) {
    const parentCoords = parent.getBoundingClientRect()
    let left
    let top

    switch (posHorizontal) {
      case 'left':
        left = parseInt(parentCoords.left) - distance - tooltip.offsetWidth
        if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
          left = distance
        }
        break

      case 'right':
        left = parentCoords.right + distance
        if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left = document.documentElement.clientWidth - tooltip.offsetWidth - distance
        }
        break
      // eslint-disable-next-line
      default:
      case 'center':
        left = parseInt(parentCoords.left) + ((parent.offsetWidth - tooltip.offsetWidth) / 2)
    }

    switch (posVertical) {
      case 'center':
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2
        break

      case 'bottom':
        top = parseInt(parentCoords.bottom) + distance
        break
      // eslint-disable-next-line
      default:
      case 'top':
        top = parseInt(parentCoords.top) - tooltip.offsetHeight - distance
    }

    left = (left < 0) ? parseInt(parentCoords.left) : left
    top = (top < 0) ? parseInt(parentCoords.bottom) + distance : top

    tooltip.style.left = left + 'px'
    tooltip.style.top = top + scrollY + 'px'
  }
})();
