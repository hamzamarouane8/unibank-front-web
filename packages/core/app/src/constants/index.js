export const LOGOUT_URI = '/logout';
export const HOME_URI = '/home';
export const DEFAULT_URI = '/';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const logoutAction = (payload) => ({ type: LOGOUT, payload });
