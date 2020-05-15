import React, { useReducer, createContext } from 'react';
import { UUID } from '@sgabskit/commons';
import * as store from '@sgabskit/local-storage';


let initialState = {
  user: null,
  authenticated: false,
  appId: null,
};

const Session = createContext(initialState);

let reducer = (state, action) => {

  let sessionId = null;
  const prefix = (id) => `${state.appId|| action.appId}-${id}`;

  switch (action.type) {
    case 'LOGOUT':
      //store.reset();
      store.remove(prefix('session_user'));
      store.remove(prefix('session_id'));
      return { appId: state.appId, user: null, authenticated: false };
    case 'LOGIN':
      if (!action.payload) throw new Error('INVALID_LOGIN_PAYLOAD');
      sessionId = UUID.create();
      //store.set('user.access_token', action.payload.access_token);
      store.set(prefix('session_user'), JSON.stringify(action.payload), sessionId);
      store.set(prefix('session_id'), Buffer.from(sessionId).toString('base64'));
      return { ...state, authenticated: true, user: action.payload };
  }
  return state;
};

function SessionProvider({ children, appId }) {

  const sessionId = store.get(`${appId}-session_id`);
  let user = null;
  if (sessionId) {
    try {
      const secret = Buffer.from(sessionId, 'base64').toString('utf8');
      const userCached = store.get(`${appId}-session_user`, secret);
      user = JSON.parse(userCached);
    } catch (e) {
      console.warn(e.message);
    }
  }
  const _initialState = { appId, user, authenticated: user != null };

  let [state, dispatch] = useReducer(reducer, _initialState);

  let value = { state, dispatch };

  return (
    <Session.Provider value={value}>{children}</Session.Provider>
  );
}

let SessionConsumer = Session.Consumer;

export { Session, SessionProvider, SessionConsumer };
