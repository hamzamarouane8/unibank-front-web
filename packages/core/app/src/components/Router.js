// @flow

import React from 'react';
import Promise from 'bluebird';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import map from 'lodash.map';
import forEach from 'lodash.foreach';
import get from 'lodash.get';
import isString from 'lodash.isstring';
import isObject from 'lodash.isobject';
import isFunction from 'lodash.isfunction';
import Lazy from '@sgabskit/lazy-component';
import AlertsProvider from '@sgabskit/alerts';

// -----------------------------------------------------------------------------

import {loginAction, logoutAction, DEFAULT_URI, LOGOUT_URI, HOME_URI} from '../constants';
import {Session, SessionProvider} from '../context/session';

// -----------------------------------------------------------------------------


const ExtRoute = ({config, component, access, path, exact, Layout,option}) => {
  console.log('check time of render')
  let session = null;
  if (config.session) {
    let {state, dispatch} = React.useContext(Session);
    console.log('ExtRoute',state)

    const loginPageUri = get(config, 'loginPage', HOME_URI);
    const homePage = get(config, 'homePage', DEFAULT_URI);
    if (access) {
      if (state.authenticated && access['guest']) {
        return <Redirect to={homePage}/>;
      } else if (!state.authenticated && !access['guest']) {
        return <Redirect to={loginPageUri}/>;
      }
    }

    session = {
      user: state.user,
      login: (user) => {
        dispatch(loginAction(user));
        return Promise.resolve(user);
      },
      logout: () => {
        dispatch(logoutAction());
        return Promise.resolve();
      },
    };

  }

  return (
    <Route path={path} exact={exact} render={(props) => {

      if (isString(component)) return <Redirect to={component}/>;

      const redirect = (path) => {
        props.history.push(path);
      };

      const NestedComponent = component;

      const pageProps = {
        router: {redirect},
        session,
        option
      };

      const view = (
        <Lazy>
          <NestedComponent {...pageProps} />
        </Lazy>
      );

      // if (path === policy.loginPage) return view;

      return (<Layout {...pageProps}>{view}</Layout>);

    }}/>
  );
};

const DefaultLogout = ({history}) => {
  let {dispatch} = React.useContext(Session);
  dispatch(logoutAction());
  history.replace('/');
  return null;
};

const NoLayout = ({children}) => children;

const Page404 = () => <h1>Page not found</h1>;

export default ({routes, layout, config}) => {

  const _routes = {};
  const _option = {};
  const layouts = {};
  const access = {}

  forEach(routes, (c, path) => {

    if (isString(c)) {
      _routes[path] = c;
    } else if (isFunction(c)) {
      _routes[path] = React.lazy(c);
    } else if (isObject(c)) {
      layouts[path] = c.layout;
      _option[path]=c.option;
      access[path] = {
        guest: c.guest,
        access: c.access,
      };
      _routes[path] = React.lazy(c.component);
    } else {
      console.error(c);
      throw new Error('INVALID_ROUTE');
    }

    if (layouts[path] === false) {
      layouts[path] = NoLayout;
    } else {
      layouts[path] = c.layout || NoLayout;
    }

  });
  return (
    <SessionProvider appId={config.appId}>
      <AlertsProvider>
        <BrowserRouter>
          <Switch>
            {map(_routes, (page, path) => (
              <ExtRoute exact component={page} path={path} key={path}
                        access={access[path]} option={_option[path]}
                        config={config} Layout={layouts[path]}/>
            ))}
            {config.session && <Route exact path={LOGOUT_URI} component={DefaultLogout}/>}
            <Route component={Page404}/>
          </Switch>
        </BrowserRouter>
      </AlertsProvider>
    </SessionProvider>
  );
};
