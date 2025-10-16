import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SPDocKit',
  tagline: 'SharePoint management and administration tool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs3.syskit.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For deployment on /spdockit route
  baseUrl: '/spdockit/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Syskit', // Usually your GitHub org/user name.
  projectName: 'spdockit', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the root of baseUrl
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/SysKitTeam/docs-spdockit',
        },
        blog: false, // Disable the blog feature
        pages: false, // Disable the pages feature
        theme: {
          customCss: ['./src/css/custom.css', './src/css/search.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-hubspot',
        [
      'docusaurus-lunr-search',
      {
        highlightResult: true,
        disableVersioning: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-NFPDG3D', // Replace with your GTM container ID
      },
    ],
  ],

  themeConfig: {
    // HubSpot configuration
    hubspot: {
      accountId: '20687839',
    },
    // Comment if not needed
    // announcementBar: {
    //   id: 'power_platform_promotion',
    //   content:
    //     '🔎 Get full Power Platform visibility with Syskit Point <a target="_blank" rel="noopener noreferrer" href="https://www.syskit.com/use-cases/power-platform-visibility-and-security/">Learn how</a>',
    //   backgroundColor: '#5700af',
    //   textColor: '#ffffff',
    //   isCloseable: false,
    // },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true, // Respect user's color scheme preference
    },
    // Replace with your project's social card
    image: 'img/SPDockit-social-card.png',
    navbar: {
      title: 'SPDocKit',
      logo: {
        alt: 'SPDocKit Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/', // Link to the docs homepage
      },
      items: [
        {
          href: 'https://www.syskit.com/products/spdockit/download/',
          label: 'Try it for Free',
          position: 'right',
        },
        {
          href: 'https://www.syskit.com/contact-us/',
          label: 'Contact Us',
          position: 'right',
        },
        {
          href: 'https://www.syskit.com/products/spdockit/',
          label: 'Product Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/syskit',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/syskit-ltd',
            },
            {
              label: 'X',
              href: 'https://twitter.com/syskitteam',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Syskit Website',
              href: 'https://www.syskit.com/',
            },
            {
              label: 'Blog',
              href: 'https://www.syskit.com/blog/',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/SysKitTeam/docs-spdockit.git',
            },
          ],
        },
      ],
      copyright: `Copyright Syskit ${new Date().getFullYear()}. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash', 'javascript', 'typescript', 'sql', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
