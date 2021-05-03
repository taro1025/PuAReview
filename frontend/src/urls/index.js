const DEFAULT_API_LOCALHOST = 'http://127.0.0.1:3000/api/v1';

export const puasIndex = `${DEFAULT_API_LOCALHOST}/puas`;
export const postsIndex = (pua_id) =>
  `${DEFAULT_API_LOCALHOST}/puas/${pua_id}/posts`;
export const reviewsIndex = (pua_id) =>
  `${DEFAULT_API_LOCALHOST}/puas/${pua_id}/reviews`;
export const searchedPuas = `${DEFAULT_API_LOCALHOST}/puas/search`
export const createUser = `${DEFAULT_API_LOCALHOST}/user`
export const login = `${DEFAULT_API_LOCALHOST}/login`
export const logout = `${DEFAULT_API_LOCALHOST}/logout`
export const logged_in = `${DEFAULT_API_LOCALHOST}/logged_in`
