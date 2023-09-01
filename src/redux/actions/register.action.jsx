export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function registerUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  };
}
