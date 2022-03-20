// import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/auth/';
// class AuthService {
//   login(user) {
//     return axios
//       .post(API_URL + 'signin', {
//         email_user: user.email_user,
//         password_user: user.password_user
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem('user', JSON.stringify(response.data));
//         }
//         return response.data;
//       });
//   }
//   logout() {
//     localStorage.removeItem('user');
//   }
//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       email_user: user.email_user,
//       password_user: user.password_user
//     });
//   }
// }
// export default new AuthService();