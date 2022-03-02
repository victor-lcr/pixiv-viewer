import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://victor-hibiapi.herokuapp.com/api/pixiv/",
  timeout: 12 * 1000,
  headers: { "Content-Type": "application/json" },
});

const get = async (url, params) => {
  try {
    const res = await axios.get(url, { params });

    return new Promise((resolve, reject) => {
      let data = res.data;
      if (typeof data === "object") {
        resolve(data);
      } else {
        reject(data);
      }
    });
  } catch (ex) {
    console.error(ex);
  }
};

const post = async (url, data) => {
  try {
    const res = await axios.post(url, data).data;

    return new Promise((resolve, reject) => {
      let data = res.data;
      if (typeof res === "object") {
        resolve(data);
      } else {
        reject(data);
      }
    });
  } catch (ex) {
    console.error(ex);
  }
};

export { get, post };
