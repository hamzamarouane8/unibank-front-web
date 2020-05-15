import React from 'react';
import AppContainer from '@sgabskit/app';
import './assets/styles/app.scss';
import LayoutGuest from './pages/layout/_layoutGuest'
import LayoutSecured from './pages/layout/_layoutSecured'
import {theme} from './assets/styles/themes/theme'
import {ThemeStyledProvider} from '@sgabskit/theme';

/**
 * Routes du projet
 */
const routes = {

  '/wallets': {
    component: () => import('./pages/wallets'),
    layout: LayoutSecured,
    guest: false
  },
  '/countries': {
    component: () => import('./pages/country'),
    layout: false,
    guest: true
  },
  '/': '/dashboard',
  '/home': {
    component: () => import('./pages/home'),
    layout: LayoutGuest,
    guest: true
  }/*,
  '/branches': {
    component: () => import('./pages/branches'),
    layout: LayoutGuest,
    guest: true,

  },*/,
  '/login': {
    component: () => import('./pages/login'),
    layout: LayoutGuest,
    guest: true
  },
  '/dashboard': {
    component: () => import('./pages/accounts'),
    layout: LayoutSecured,
    guest: false
  },
  '/faq': {
    component: () => import('./pages/faq'),
    layout: LayoutGuest,
    guest: true,
    option:{background:'#fff'},
  },
  '/faqSec': {
    component: () => import('./pages/faq'),
    layout: LayoutSecured,
    guest: false,
    option:{background:'#f7f7f7',ml:220},
  },
  '/cgu': {
    component: () => import('./pages/cgu'),
    layout: false,
    guest: false
  },
  '/branchesSec': {
    component: () => import('./pages/branches'),
    layout: LayoutSecured,
    guest: false,
    option:{ml:230, mt:-10, w:100,p:0},
  },
  '/exchange': {
    component: () => import('./pages/exchange_rate'),
    layout: LayoutGuest,
    guest: true,
    option:{background:'#fff'},

  },
  '/exchangeSec': {
    component: () => import('./pages/exchange_rate'),
    layout: LayoutSecured,
    guest: false,
    option:{background:'#f7f7f7',ml:220},
  }
  ,
  '/edoc': {
    component: () => import('./pages/e_document'),
    layout: LayoutSecured,
    guest: false
  }
};

export default () => (
  <ThemeStyledProvider theme={theme}>
    <AppContainer id="bankup" routes={routes} layout={LayoutGuest} config={{session: true}}/>
  </ThemeStyledProvider>
)
