// import {lazy} from 'react';
import Home from './screens/Home';
import User from './screens/User';

export const routes = [
  {
    name: 'Home',
    component: Home,
    options: {
      // title: 'Home',
    },
    iconName: 'home'
  },
  {
    name: 'User',
    component: User,
    options: {
      // title: 'Home',
    },
    iconName: 'person'
  },
];

