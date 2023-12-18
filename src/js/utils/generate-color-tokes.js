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

function createTokenTypes (token, tokenMap) {
  const div = document.createElement('div');
  div.style.marginBottom = '1rem';

  const h3 = document.createElement('h3');
  h3.textContent = tokenMap.name || tokenMap

  div.appendChild(h3);

  if (tokenMap.maps) {
    for (const fisrtMap of Object.keys(tokenMap.maps)) {
      const typeDiv = document.createElement('div');
      typeDiv.style.margin = '0 0 1rem 2rem';

      const h3 = document.createElement('h3');
      h3.style.textTransform = 'capitalize';
      h3.textContent = tokenMap.maps[fisrtMap]?.name || tokenMap.maps[fisrtMap];

      typeDiv.appendChild(h3);

      if (tokenMap.maps[fisrtMap]?.maps) {
        for (const secondMap of Object.keys(tokenMap.maps[fisrtMap]?.maps)) {
          const divInside = document.createElement('div');
          divInside.style.margin = '0 0 1rem 2rem';

          const h4 = document.createElement('h4');
          h4.style.textTransform = 'capitalize';
          h4.textContent = tokenMap.maps[fisrtMap]?.maps[secondMap]

          divInside.appendChild(h4);

          divInside.appendChild(createTokens(token[fisrtMap][secondMap]))

          typeDiv.appendChild(divInside);
        }
      } else {
        typeDiv.appendChild(createTokens(token[fisrtMap]))
      }

      div.appendChild(typeDiv);
    }
  } else {
    div.appendChild(createTokens(token));
  }

  return div
}

function renderTokens () {
  const target = document.getElementById('generated-tokens');
  if (target) {
    Object.keys(tokensMap).forEach((key) => {
      target.appendChild(createTokenTypes(tokens[key], tokensMap[key]))
    })
  }
}
