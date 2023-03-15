import axios from 'axios';
export const request = async (method, url, data, args = {}) => {
  await axios({
    method: method,
    url: url,
    data: data,
    ...args,
  });
};
