import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";

export const LoginUsingGoogle = (token) => {
  const fetchDataFromGoogle = useQuery(
    ["Fetch-data-from-google"],
    () => client.auth.authByGoogle(token),
    {
      enabled: token?.length > 0,
    }
  );

  const googleData = fetchDataFromGoogle?.data;
  return googleData;
};
