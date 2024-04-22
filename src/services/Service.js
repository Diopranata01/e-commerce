import Axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const api = Axios.create({
  baseURL: REACT_APP_BASE_URL,
});

// Function to handle token storage and retrieval
const tokenHandler = {
  getToken: () => {
    return sessionStorage.getItem("access_token");
  },
  setToken: (token) => {
    sessionStorage.setItem("access_token", token);
  },
  clearToken: () => {
    sessionStorage.removeItem("access_token");
  },
};

// Request interceptor to add Authorization header with access token
// api.interceptors.request.use(
//   (config) => {
//     const token = tokenHandler.getToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor to handle token refresh and retry failed requests
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         // Call your token refresh endpoint to obtain a new access token
//         const response = await Axios.post(`${REACT_APP_BASE_URL}/refresh-token-endpoint`, {
//           refresh_token: tokenHandler.getRefreshToken(), // Pass your refresh token here
//         });
//         const newAccessToken = response.data.access_token;
//         tokenHandler.setToken(newAccessToken); // Update the access token
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return api(originalRequest); // Retry the original request with the new token
//       } catch (error) {
//         // If token refresh fails, clear tokens and redirect to login
//         tokenHandler.clearToken();
//         console.error("Token refresh failed:", error);
//         window.location.href = "/login"; // Redirect to login page
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export { api, tokenHandler };
