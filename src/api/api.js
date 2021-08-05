import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const userAPI = {
  getUsers(currentPage = 1) {
    return instance.get(`people/?page=${currentPage}`).then((response) => {
      return response.data;
    });
  },

  getFollow() {
    return axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {},
      { withCredentials: true }
    );
  },
  // follow(userId) {
  //   return instance.post(
  //     `https://jsonplaceholder.typicode.com/posts`,
  //     {},
  //     { withCredentials: true }
  //   );
  // },
  // unfollow(userId) {},

  getProfile(userId) {
    return instance.get(`species/` + userId);
  },
  getHeaderPlanet() {
    return instance.get(`planets`);
  },
};

// export const getFollow = () => {
//   // return instance.get(`people/?page=${currentPage}`).then((response) => {
//   //   return response.data;
//   // });
//   return axios.post(
//     `https://jsonplaceholder.typicode.com/posts`,
//     {},
//     { withCredentials: true }
//   );
// };
