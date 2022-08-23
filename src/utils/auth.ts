/**
 * File to check is user authenticated, and logout function
 */
const TOKEN_KEY = "_t4gd-*-"

export const auth = {
  isAuthenticated,
  getToken,
  login,
  logout,
}

function isAuthenticated() {}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY)
}

async function login() {
  //   const { token, user } = await signin({ username, password });
}

async function logout() {}
