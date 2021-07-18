import axios from 'axios';

const url = 'http://localhost:4000/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'user/login/', credentials)
      .then(response => response.data);
  },
  
  signUp(credentials) {
    return axios
      .post(url + 'sign-up/', credentials)
      .then(response => response.data);
  },
  getProfileImage() {
    return axios
      .get(url + 'image/show/')
      .then(response => {
        return 'data:image/png;base64,' + btoa( new Uint8Array(response.data.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '') );

      });
  },
};