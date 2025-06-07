import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Intro',
      items: [
        'intro/index',
        'intro/getting-started',
        'intro/faq',
      ],
    },
    {
      type: 'category',
      label: 'Bug Reports',
      items: [
        'bug-reports/index',
        'bug-reports/open-issues',
        'bug-reports/resolved-issues',
      ],
    },
    {
      type: 'category',
      label: 'Software',
      items: [
        'software/index',
        'software/firmware',
        'software/ml-inference',
        'software/motor-control',
        'software/overview',
      ],
    },
    {
      type: 'category',
      label: 'VP Meetings',
      items: [
        'vp-meetings/apr-3',
        'vp-meetings/may-28',
        'vp-meetings/summary',
        'vp-meetings/plans',
      ],
    },
  ],
};

export default sidebars;
