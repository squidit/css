(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7A3R":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));var s=n("Fcif"),a=n("dV/x"),l=(n("mXGw"),n("/FXl")),i=n("TjRS");n("aD51");const o=["components"],r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!Object.prototype.hasOwnProperty.call(r,"__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/index.mdx"}});const c={_frontmatter:r},b=i.a;function d(e){let{components:t}=e,n=Object(a.a)(e,o);return Object(l.b)(b,Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"getting-started"},"Getting Started"),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)("p",null,"You can easily install with npm or download ",Object(l.b)("a",{href:"https://github.com/squidit/css/releases",target:"_blank"},"here")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"npm install @squidit/css --save\n")),Object(l.b)("p",null,"Just reference CSS ",Object(l.b)("inlineCode",{parentName:"p"},"/dist/css/squid.min.css")," and Javascript ",Object(l.b)("inlineCode",{parentName:"p"},"/dist/js/squid.min.js")," on your page or your framework.\nIf necessary remember to declare the fonts contained in the ",Object(l.b)("inlineCode",{parentName:"p"},"/dist/fonts")," folder or change paths on ",Object(l.b)("inlineCode",{parentName:"p"},"squid.min.css")," or ",Object(l.b)("inlineCode",{parentName:"p"},"squid.css")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    ...\n    <link rel="stylesheet" href="path-to-files/dist/css/squid.min.css">\n  </head>\n  <body>\n    ...\n    <script defer src=\'path-to-files/dist/js/squid.min.js\'><\/script>\n  </body>\n</html>\n')),Object(l.b)("h2",{id:"angular-install"},"Angular Install"),Object(l.b)("p",null,"After using the ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," command, do the following:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Add ",Object(l.b)("inlineCode",{parentName:"li"},"css")," and ",Object(l.b)("inlineCode",{parentName:"li"},"js")," files to your ",Object(l.b)("inlineCode",{parentName:"li"},"angular.json"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'{\n  ...,\n  "assets": [\n    // This object inside assets Array\n    {\n      "glob": "**/*",\n      "input": "./node_modules/@squidit/css/dist/fonts",\n      // Output fonts\n      "output": "./assets/fonts"\n    },\n     // Default assets\n    "src/assets"\n  ],\n  "styles": [\n    "src/styles.scss"\n  ],\n  // JS includes\n  "scripts": [\n    "node_modules/@squidit/css/dist/js/squid.min.js"\n  ],\n  ...\n}\n')),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Add to your ",Object(l.b)("inlineCode",{parentName:"li"},"style.scss")," main file")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss"},"// Overwrite default font path\n$fontsFolderPath: '/assets/fonts';\n// Import all Framework Styles\n@import '~@squidit/css/src/scss/squid.scss';\n")),Object(l.b)("p",null,"Obs: Probably components that need javascript will not work as they are loaded in onload event. They need some implementation within Angular.\nA library for Angular will be developed soon."),Object(l.b)("h2",{id:"reactjs-install"},"React.js Install"),Object(l.b)("p",null,"After install, import CSS into your global style:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss"},"  // Overwrite default font path\n  $fontsFolderPath: '~@squidit/css/dist/fonts';\n  // Import all Framework Styles\n  @import '~@squidit/css/src/scss/squid.scss';\n")),Object(l.b)("p",null,"And in your ",Object(l.b)("inlineCode",{parentName:"p"},"index.{jsx,tsx}")," on root just add:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"  if (typeof window !== 'undefined') {\n    require('@squidit/css/dist/js/squid.min.js')\n  }\n")),Object(l.b)("p",null,"Obs: Probably components that need javascript will not work as they are loaded in onload event. They need some implementation within React.\nA library for React will be developed soon."),Object(l.b)("h2",{id:"vuejs-install"},"Vue.js Install"),Object(l.b)("p",null,"Soon"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-index-mdx-d042580800c906369681.js.map