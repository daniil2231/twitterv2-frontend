import api from "./Http-common";
// import jwtDecode from "jwt-decode";

// FOR WHEN LOGIN IS FINISHED
// const login = (user) => {
//   return api.post(`/login`, user).then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }
//     return response.data;
//   });
// };

// const login = (username) => {
//   return fetch("/User/" + username).then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }
//     return response.data;
//   });
// };

const login = (usernameInput, passwordInput) => {
  return api
    .post(
      "/Auth/login",
      JSON.stringify({ username: usernameInput, password: passwordInput }),
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const register = (usernameInput, passwordInput) => {
  return api.post(
    "/User",
    JSON.stringify({
      username: usernameInput,
      password: passwordInput,
      followers: 0,
      following: 0,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// const getUserId = () => {
//   var token = localStorage.getItem("user");
//   if (token) {
//     var user = jwtDecode(token);
//     console.log(user);
//   } else {
//     user = {
//       id: "Not logged in",
//     };
//   }
//   return user.id;
// };

// const getUserRole = () => {
//   var token = localStorage.getItem("user");
//   if (token) {
//     var user = jwtDecode(token);
//     console.log(user);
//   } else {
//     user = {
//       id: "Not logged in",
//     };
//   }
//   return user.roles;
// };

const AuthenticationService = {
  login,
  register,
  logout,
  getCurrentUser,
  // getUserId,
  // getUserRole,
};

export default AuthenticationService;
