const axios = require('axios').default;

export const serverApi = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
  headers: { authorization: 'Bearer ' + process.env.REACT_APP_API_KEY }
});
