function renderButtons () {
  const target = document.getElementById('buttons');

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

    for (const color of buttons) {
      const button = document.createElement('button');
      button.className = `button ${color ? 'button-' + color : ''} ${type === 'Inverted' ? type.toLowerCase() : ''}`;
      button.style.width = '100%'
      button.textContent = color;

      examples.appendChild(button);
    }

    div.appendChild(examples);
  }

  target.appendChild(div);
}