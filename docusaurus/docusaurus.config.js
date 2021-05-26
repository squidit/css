/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CSS - Components Squid Style',
  tagline: 'Framework',
  url: 'https://squidit.github.io/css/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'squidit',
  projectName: 'css',
  scripts: [
    'https://cdn.jsdelivr.net/npm/@squidit/css@1/dist/js/squid.min.js'
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/@squidit/css@1/dist/css/squid.min.css'
  ],
  themeConfig: {
    navbar: {
      title: 'CSS - Components Squid Style',
      logo: {
        alt: 'Squid Logo',
        src: 'https://squidit.com.br/wp-content/themes/squid/assets/img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Styleguide',
        },
        {
          href: 'https://github.com/squidit/css',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Components',
              to: '/docs/intro',
            },
            {
              label: 'Styleguide',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/squiditapp',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/squidit/css/issues',
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Site',
              to: 'http://squidit.com.br/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/squidit/css',
            }
          ]
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Squidit, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-bootstrap',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/squidit/css/tree/master/docusaurus/docs/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/squidit/css/tree/master/docusaurus/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
