import { AuthProvider, HttpError } from "react-admin";
// import data from "./users.json";

const API_URL = 'http://localhost:8888';

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${API_URL}/users?username=${username}&password=${password}`,{
      method: 'GET'
    });
    const users = await response.json();

    const user = users.find(
      (u: any) => u.username === username && u.password === password
    );

    if (user) {
      // eslint-disable-next-line no-unused-vars
      let { password, ...userToPersist } = user;
      localStorage.setItem("user", JSON.stringify(userToPersist));
      localStorage.setItem("role", user.role == 1 ? "admin" : "student");
      return Promise.resolve();
    }

    return Promise.reject(
      new HttpError("Unauthorized", 401, {
        message: "Invalid username or password",
      })
    );
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: ({from}) => {
    return new Promise((resolve, reject) => {
      const persistedUser = localStorage.getItem("user");
      if (persistedUser) {
        resolve();
      } else {
        if (from === '/') window.location.href = '/home.html';
        reject();
      }
    })
  },
  getPermissions: () => {
    const role = localStorage.getItem("role");
    if (role) return Promise.resolve(role);
    return Promise.reject();
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
  setIdentity: (identity: {id:number,username:string,fullName:string}) => {
    localStorage.setItem("user", JSON.stringify(identity));
    return Promise.resolve();
  }
};

export default authProvider;
