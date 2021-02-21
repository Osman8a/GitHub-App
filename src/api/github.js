import axios from 'axios';

const github = (token) =>
  axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${token}`,
    },
  });

export { github };
