import axios from "axios";

export const baseURL = process.env.REACT_APP;

const Axios = axios.create({
  baseURL,
  timeout: 5000000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpClient {
  async get(url, params) {
    const response = await Axios.get(url, { params });
    return response.data;
  }
  static async post(url, data, options) {
    const response = await Axios.post(url, data, options);
    return response.data;
  }
}
