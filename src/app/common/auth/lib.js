import axios from "axios";

export const googleCredentials = async (token) => {
  try {
    const googleResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    return googleResponse;
  } catch (error) {
    return error;
  }
};
