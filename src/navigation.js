import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Overview',
      href: getPermalink('/#Overview'),
    },
    {
      text: 'Call For Papers',
      href: getPermalink('/#Call-For-Papers'),
    },
    {
      text: 'Challenges',
      href: getPermalink('/#Challenges'),
    },
    {
      text: 'Organizers',
      href: getPermalink('/#Organizers'),
    },
    {
      text: 'Steering Committee',
      href: getPermalink('/#Steering-Committee'),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
