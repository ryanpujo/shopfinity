import { nanoid } from "nanoid";

export const leftNav = [
  {
    id: nanoid(4),
    title: 'Home',
    href: '/',
    icon: 'mdi:home',
  },
  {
    id: nanoid(4),
    title: 'Catalog',
    href: '/catalog',
    icon: 'mdi:store-outline',
  },
  {
    id: nanoid(4),
    title: 'Customer Service',
    href: '/cs',
    icon: 'mdi:face-agent'
  },
  {
    id: nanoid(4),
    title: 'Policy',
    href: '/policy',
    icon: 'mdi:help-box-multiple'
  },
  {
    id: nanoid(4),
    title: 'Blog',
    href: '/blog',
    icon: 'mdi:post'
  },
];
export const rightNav = [
  {
    id: nanoid(4),
    title: 'Deal of The Day',
    href: '/dotd',
  },
  {
    id: nanoid(4),
    title: 'Hot Deals',
    href: '/hotdeals',
  },
  {
    id: nanoid(4),
    title: 'Best Sellers',
    href: '/bestsellers',
  },
  {
    id: nanoid(4),
    title: 'New Arrivals',
    href: '/newarrivals',
  },
];