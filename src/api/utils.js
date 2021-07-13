export const storage = {
  getToken: () => JSON.parse(localStorage.getItem("token")),
  setToken: (token) =>
    window.localStorage.setItem("token", JSON.stringify(token)),
  clearToken: () => localStorage.removeItem("token")
};
