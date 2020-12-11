module.exports = {
  title: 'Wild Me Docs',
  tagline: 'Documentation for Wildbook, Codex, and other Wild Me software.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WildbookOrg', // Usually your GitHub org/user name.
  projectName: 'wildme-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Wild Me Docs',
      logo: {
        alt: 'Wild Me Logo',
        src: 'img/WildMe-Logo-Gradient.svg',
      },
      items: [
        {
          to: 'docs/researchers/overview',
          activeBasePath: 'docs',
          label: 'Researchers',
          position: 'left',
        },
        {
          to: 'docs/developers/overview',
          activeBasePath: 'docs',
          label: 'Developers',
          position: 'left',
        },
        {
          href: 'https://github.com/WildbookOrg/wildme-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Researchers',
          items: [
            {
              label: 'Researcher Overview',
              to: 'docs/researchers/overview',
            },
            {
              label: 'Encounter guide',
              to: 'docs/researchers/encounter_guide',
            },
            {
              label: 'Marked individual',
              to: 'docs/researchers/marked_individual',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Developer Overview',
              to: 'docs/developers/overview',
            },
            {
              label: 'Wildbook',
              to: 'docs/developers/wildbook_overview',
            },
            {
              label: 'Codex',
              to: 'docs/developers/codex_overview',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'wildme.org',
              to: 'https://www.wildme.org/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WildbookOrg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/wildbookorg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wild Me.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/WildbookOrg/wildme-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/WildbookOrg/wildme-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
