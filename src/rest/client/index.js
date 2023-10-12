import axios from "axios";

import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

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
    authByFacebook: (userId, token) =>
      axios.get(
        `${process.env.REACT_APP_FACEBOOK_ENDPOINT}/${userId}?fields=id,name,email,picture&access_token=${token}`
      ),
    googleCallBack: ({ ...parms }) =>
      HttpClient.post(API_ENDPOINTS.authGoogle, { ...parms }),
    metaCallBack: ({ ...parms }) =>
      HttpClient.post(API_ENDPOINTS.authMeta, { ...parms }),
    register: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.register, { ...params }),
  };
}

export default new Client();
