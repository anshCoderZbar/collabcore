import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useToken } from "lib/utils/UseToken";
import { useNavigate } from "react-router-dom";
import { useAuth } from "lib/utils/UseAuth";
import { useAtom } from "jotai";
import { userDetails } from "store/Authenticaton";
import toast from "react-hot-toast";
import { registerationAtom } from "store/Register";

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
  const navigate = useNavigate();
  const [, setRegisteration] = useAtom(registerationAtom);
  const registerMutation = useMutation({
    mutationFn: (data) =>
      client.auth.register({
        email: data?.email,
        password: data?.password,
      }),
    onSuccess: (data) => {
      navigate("/account-setup");
      toast.success("Ready to Go, Setup Next");
      setRegisteration(data);
    },
    onError: (error) => {
      console.log(error?.status);
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("OOPS! some error occured");
      }
    },
  });
  return registerMutation;
};

export const AccountSetup = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { setToken } = useToken();
  const [, setAuthentication] = useAtom(userDetails);

  const accountSetupMutation = useMutation({
    mutationFn: (data) => client.auth.accountSetup(data),
    onSuccess: (data) => {
      navigate("/");
      toast.success(`Welcome ${data?.user?.name}`);
      setToken(data?.token);
      setAuth(data?.user);
      setAuthentication(data?.user);
    },
    onError: () => {
      toast.error("OOPS! some error occured");
    },
  });
  return accountSetupMutation;
};

export const LoginUsingMail = () => {
  const navigate = useNavigate();
  const [, setRegisteration] = useAtom(registerationAtom);
  const { setAuth } = useAuth();
  const { setToken } = useToken();
  const [, setAuthentication] = useAtom(userDetails);

  const login = useMutation({
    mutationFn: (data) =>
      client.auth.login({
        email: data?.email,
        password: data?.password,
      }),
    onSuccess: (data) => {
      console.log(data);
      if (data?.setup === false) {
        navigate("/account-setup");
        setRegisteration(data?.data);
      } else {
        navigate("/");
        toast.success(`Welcome ${data?.user?.name}`);
        setToken(data?.token);
        setAuth(data?.user);
        setAuthentication(data?.user);
      }
    },
    onError: (error) => {
      if (error?.code === "ERR_BAD_REQUEST") {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("OOPS! some error occured");
      }
    },
  });
  return login;
};
