import axios from "axios";
import { API_ENDPOINTS } from "./api-endpoints";

class Client {
  auth = {
    authByGoogle: (token) =>
      axios.get(
        `${process.env.REACT_APP_GOOGLE_ENDPOINT}/${API_ENDPOINTS?.userDataFromGoogle}?token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      ),
  };
}

export default new Client();
