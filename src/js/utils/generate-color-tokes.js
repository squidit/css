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
