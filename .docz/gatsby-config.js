const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Css',
    description: '## About',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Css',
        description: '## About',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/vinimarcili/Desenvolvimento/Squid/frontEnd',
          templates:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/node_modules/docz-core/dist/templates',
          docz: '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz',
          cache:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/.cache',
          app: '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/app',
          appPackageJson:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/package.json',
          appTsConfig:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/tsconfig.json',
          gatsbyConfig:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/gatsby-config.js',
          gatsbyBrowser:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/gatsby-browser.js',
          gatsbyNode:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/gatsby-node.js',
          gatsbySSR:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/gatsby-ssr.js',
          importsJs:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/app/imports.js',
          rootJs:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/app/root.jsx',
          indexJs:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/app/index.jsx',
          indexHtml:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/app/index.html',
          db:
            '/home/vinimarcili/Desenvolvimento/Squid/frontEnd/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
