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

You can easily install with npm

or download [here](https://github.com/squidit/css/releases)

or use CDN`https://www.jsdelivr.com/package/gh/squidit/css`*

or use `https://css-cdn.squidit.com.br`*

-> Use the path from references above on CDN's to find the files. Exemple: `https://css-cdn.squidit.com.br/dist/css/squid.min.css`

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

Use [NGX-CSS](https://github.com/squidit/ngx-css)

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

2. Run `npm start` to watch `.scss` and `.js` files

### Write Documentation

See Intructions [here](https://github.com/squidit/css/blob/master/src/docs/README.md)

### Deploy on jsdelivr

The official CDN for Squid CSS is jsdelivr, which is even where the framework documentation consumes assets.

On [GitHub Releases](https://github.com/squidit/css/releases) create a new release, with a new tag version** and using `master` branch

### jsdelivr usage

```html
...
<link src="https://cdn.jsdelivr.net/gh/squidit/css@latest/dist/css/squid.min.css" rel=stylesheet>
...
<script src='https://cdn.jsdelivr.net/gh/squidit/css@latest/dist/js/squid.min.js'></script>
```

### Deploy yo NPM

> Just draft a new release here on Github and an actions will starts

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
