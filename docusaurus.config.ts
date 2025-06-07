import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'McMaster Exoskeleton',
  tagline: 'Empowering Mobility with Robotics',
  favicon: 'img/exo-favicon.ico', // <-- use your exoskeleton favicon

  future: {
    v4: true,
  },

  url: 'https://mcmaster-exoskeleton.github.io',
  baseUrl: '/docusaurus-demo/',

  organizationName: 'mcmaster-exoskeleton', // GitHub org/user name
  projectName: 'docusaurus-demo', // GitHub repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        // blog: false, // Uncomment if you want to disable the blog
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'meetings',
        path: 'meetings',
        routeBasePath: 'meetings',
        sidebarPath: require.resolve('./sidebarMeetings.ts'),
      },
    ],
    '@easyops-cn/docusaurus-search-local', // <-- Add this line
  ],

  themes: [
    '@docusaurus/theme-live-codeblock', // <-- Add this line
  ],

  themeConfig: {
    image: 'img/exo_white_scalable.svg', // <-- use your exoskeleton social card/logo
    navbar: {
      title: 'McMaster Exoskeleton',
      logo: {
        alt: 'McMaster Exoskeleton Logo',
        src: 'img/exo_white_scalable.svg', // <-- use your exoskeleton logo
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        {
          label: 'Intro',
          position: 'left',
          items: [
            { to: '/intro', label: 'Overview' },
            { to: '/intro/getting-started', label: 'Getting Started' },
            { to: '/intro/faq', label: 'FAQ' },
          ],
        },
        {
          label: 'Bug Reports',
          position: 'left',
          items: [
            { to: '/bug-reports', label: 'Overview' },
            { to: '/bug-reports/open-issues', label: 'Open Issues' },
            { to: '/bug-reports/resolved-issues', label: 'Resolved Issues' },
          ],
        },
        {
          label: 'Software',
          position: 'left',
          items: [
            { to: '/software', label: 'Overview' },
            { to: '/software/firmware', label: 'Firmware' },
            { to: '/software/ml-inference', label: 'ML Inference' },
          ],
        },
        {
          label: 'VP Meetings',
          position: 'left',
          items: [
            { to: '/vp-meetings/apr-3', label: 'Apr 3, 2025' },
            { to: '/vp-meetings/may-28', label: 'May 28, 2025' },
            { to: '/vp-meetings/summary', label: '2024 Summary' },
            { to: '/vp-meetings/plans', label: '2025 Plans' },
          ],
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
              to: '/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mcmaster-exoskeleton/exoskeleton-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} McMaster Exoskeleton.`,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
