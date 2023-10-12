import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useToken } from "lib/utils/UseToken";
import { useNavigate } from "react-router-dom";
import { useAuth } from "lib/utils/UseAuth";
import { useAtom } from "jotai";
import { userDetails } from "store/Authenticaton";
import toast from "react-hot-toast";
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

export const LoginUsingFacebook = (userId, accessToken) => {
  const fetchDataFromFacebook = useQuery(
    ["Fetch-data-from-facebook"],
    () => client.auth.authByFacebook(userId, accessToken),
    {
      enabled: userId?.length > 0,
    }
  );

  const facebookData = fetchDataFromFacebook?.data;
  return facebookData;
};

export const GoogleCallback = () => {
  const { setToken } = useToken();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [, setAuthentication] = useAtom(userDetails);

  const googleMutation = useMutation({
    mutationFn: (details) => {
      return client.auth.googleCallBack({
        email: details?.email,
        name: details?.name,
        givenName: details?.given_name,
        googleId: details?.id,
        picture: details?.picture,
      });
    },
    onSuccess: (data) => {
      setToken(data?.token);
      setAuth(data?.data);
      setAuthentication(data?.data);
      navigate("/");
      toast.success(`Welcome ${data?.data?.name}`);
    },
    onError: () => {
      toast.error("OOPS! some error occured");
    },
  });
  return googleMutation;
};

export const MetaCallback = () => {
  const { setToken } = useToken();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [, setAuthentication] = useAtom(userDetails);

  const metaMutation = useMutation({
    mutationFn: (details) => {
      return client.auth.metaCallBack({
        email: details?.email,
        name: details?.name,
        metaId: details?.id,
        picture: details?.picture?.data?.url,
      });
    },
    onSuccess: (data) => {
      setToken(data?.token);
      setAuth(data?.data);
      setAuthentication(data?.data);
      navigate("/");
      toast.success(`Welcome ${data?.data?.name}`);
    },
    onError: () => {
      toast.error("OOPS! some error occured");
    },
  });
  return metaMutation;
};

export const RegisterUsingEmail = () => {
  const registerMutation = useMutation({
    mutationFn: (data) => client.auth.register,
  });
};
