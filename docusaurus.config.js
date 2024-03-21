// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer"
const lightCodeTheme = themes.duotoneLight;
const darkCodeTheme = themes.duotoneDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jordan Mace",
  tagline: '🧪 Quality Coach in Melbourne, Australia',
  url: 'https://jordan.mace.au',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jordan-mace/au/tree/main/',
        },
        blog: {
          showReadingTime: true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jordan-mace/au/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://github.com/jordan-mace', label: 'GitHub', position: 'right'},
          {to: 'https://www.linkedin.com/in/jordan-mace/', label: 'LinkedIn', position: 'right'},
          {to: 'https://mastodon.mace.au/@jordan', label: 'Mastodon', position: 'right', rel: 'me'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jordan Mace.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        "@gracefullight/docusaurus-plugin-cloudflare-analytics",
        { token: "bcc9d88c50ee4c198a07d128e8351877" },
      ],
    ],
};

module.exports = config;
