import axios from 'axios';

const url = 'http://localhost:4000/api/';
export default {
  getFlat(credentials) {
    return axios
      .post(url + 'flat/', credentials)
      .then(response => response.data);
  },
};