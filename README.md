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
  - [Write Documentation](#write-documentation)
- [Production](#production)
  - [Deploy on jsdelivr](#deploy-on-jsdelivr)
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

Obs: Probably components that need javascript will not work as they are loaded in onload event. They need some implementation within Angular.
A library for Angular will be developed soon.

#### React.js Install

After install, import CSS into your global style:

```scss
  // Overwrite default font path
  $fontsFolderPath: '~@squidit/css/dist/fonts';
  // Import all Framework Styles
  @import '~@squidit/css/src/scss/squid.scss';
```

And in your `index.{jsx,tsx}` on root just add:

```js
  if (typeof window !== 'undefined') {
    require('@squidit/css/dist/js/squid.min.js')
  }
```

Obs: Probably components that need javascript will not work as they are loaded in onload event. They need some implementation within React.
A library for React will be developed soon.

#### Vue.js Install

Soon

## Development

1. Install npm dependences

`npm install`

2. Install Husky, Eslint, Sass, Gulp and Uglifyjs Globally
    1. `npm install husky -g`
    2. `husky install`
    3. `npm install eslint -g`
    4. `npm install sass -g`
    5. `npm install gulp -g`
    6. `npm install uglifyjs -g`

3. Run `npm start` to watch `.scss` and `.js` files

### Write Documentation

See Intructions [here](https://github.com/squidit/css/blob/master/src/docs/README.md)

## Production

1. Run `npm run dist`

2. Commit and Push to Git Remote

### Deploy on jsdelivr

The official CDN for Squid CSS is jsdelivr, which is even where the framework documentation consumes assets.

1. Run `git checkout production`

2. Run `git pull origin master`

3. Run `rm -rf docs` and resolve the conflicts that remain

4. Do a `git commit` and `git push origin production`

5. On [GitHub Releases](https://github.com/squidit/css/releases) create a new release, with a new tag version** and using `production` branch

**Important to use the same tag as package.json
## Documentation

See Docs [here](https://css.squidit.com.br)

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
