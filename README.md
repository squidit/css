<p align="center">
  <a href="https://squidit.com.br" target='_blank'>
    <img src="https://squidit.com.br/wp-content/themes/squid/assets/img/logo.svg" alt="Squid logo">
  </a>
</p>

<h1 align="center">CSS - Components Squid Style</h1>

## About

> Squid CSS Framework

## Table of contents

- [About](#about)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
  - [Install](#install)
- [Development](#development)
- [Production](#production)
- [Documentation](#documentation)
- [External Libaries and Inspiration](#external-libaries-and-inspiration)
  - [Animate.css](#animatecss)
  - [Grid System](#grid-system)
  - [Icons](#icons)
  - [Toast](#toast)
  - [Based Styleguide](#based-styleguide)

## Usage

### Install

You can easily install with npm or download [here](https://github.com/squidit/css/releases)

`npm install @squidit/css --save`



Just reference CSS `/dist/css/squid.min.css` and Javascript `/dist/js/squid.min.js` on your page or your framework

```html
<html>
    <head>
        ...
        <link rel="stylesheet" href="path-to-files/dist/css/squid.min.css">
    </head>
    <body>
    ...
    <script defer src='path-to-files/dist/js/squid.min.js'></script>
    </body>
</html>
```

## Development

1. Install npm dependences

`npm install`

2. Install Husky, Eslint, Sass, Gulp and Uglifyjs Globally
    1. `npm install husky -g`
    2. `npm install eslint -g`
    3. `npm install sass -g`
    4. `npm install gulp -g`
    5. `npm install uglifyjs -g`

3. Run `npm start` to watch `.scss` and `.js` files

## Production

1. Run `npm run dist`

2. Commit and Push to Git Remote

## Documentation

Soon

## External Libaries and Inspiration

### Animate.css

> This framework uses Animate.css lib, see docs [here](https://animate.style/)

### Grid System

> This framework uses a Grid based on Boostrap 5 Grid System with modifications, see docs [here](https://getbootstrap.com/docs/5.0/)

### Icons

> This framework uses Icons from Font Awersome, see [here](https://fontawesome.com/)

### Toast

> This framework uses a adaptation of VanillaToast, see [here](https://github.com/talsu/vanilla-toast)

### Based Styleguide

> This framework is based on [Squid Styleguide](https://www.figma.com/file/jgIT00DpxPCgaFwxlN7BZv/PADRONIZA%C3%87%C3%83O?node-id=0%3A1)