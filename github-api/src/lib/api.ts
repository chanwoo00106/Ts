import axios from "axios";

export const githubData = (id: string) => {
  return axios.get(`https://api.github.com/users/${id}`);
};
