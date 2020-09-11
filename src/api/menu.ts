type navbarType = {
  name: string;
  path: string;
}[];

export const navbar: navbarType = [
  // {
  //   name: 'Home',
  //   path: '/',
  // },
  {
    name: 'Articles',
    path: '/articles',
  },
  // {
  //   name: 'Tags',
  //   path: '/tags',
  // },
  // {
  //   name: 'About',
  //   path: '/about',
  // },
];

type footerType = {
  name: string;
  link?: string;
  path?: string;
}[];

export const footer: footerType = [
  {
    name: 'Medium',
    link: 'https://medium.com/@dwinugrohoo',
  },
  {
    name: 'Github',
    link: 'https://github.com/DwiNugroho',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/dwinugrohoo__/',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dwi-nugroho-462126138/',
  },
];
