export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}
