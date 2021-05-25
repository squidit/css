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
- [Exemple](#exemple)
- [Usage](#usage)
  - [Install](#install)
    - [Angular Install](#angular-install)
    - [React.js Install](#reactjs-install)
    - [Vue.js Install](#vuejs-install)
- [Development](#development)
- [Production](#production)
- [Documentation](#documentation)
- [External Libraries and Inspiration](#external-libraries-and-inspiration)
  - [Animate.css](#animatecss)
  - [Grid System](#grid-system)
  - [Icons](#icons)
  - [Toast](#toast)
  - [Based Styleguide](#based-styleguide)

## Exemple

See an exemple of all components [here](https://squidit.github.io/css/)

## Usage

### Install

You can easily install with npm or download [here](https://github.com/squidit/css/releases)

`npm install @squidit/css --save`

Just reference CSS `/dist/css/squid.min.css` and Javascript `/dist/js/squid.min.js` on your page or your framework.
If necessary remember to declare the fonts contained in the `/dist/fonts` folder or change paths on `squid.min.css` or `squid.css`

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

#### Angular Install

After using the `npm install` command, do the following:

1. Add `css` and `js` files to your `angular.json`
```js
{
  ...,
  "assets": [
    // This object inside assets Array
    {
      "glob": "**/*",
      "input": "./node_modules/@squidit/css/dist/fonts",
      "output": "./assets/fonts" // Output fonts
    },
    "src/assets" // Default assets
  ],
  "styles": [
    "src/styles.scss"
  ],
  "scripts": [
    "node_modules/@squidit/css/dist/js/squid.min.js" // JS includes
  ]
  ...
}
```

2. Add to your `style.scss` main file
```scss
$fontsFolderPath: '/assets/fonts'; // Overwrite default font path
@import '~@squidit/css/src/scss/squid.scss'; // Import all Framework Styles
```

#### React.js Install

Soon

#### Vue.js Install

Soon

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

## External Libraries and Inspiration

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