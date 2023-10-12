import React, { useEffect, useState } from "react";

import { MetaIcon } from "app/icons";
import { FcGoogle } from "react-icons/fc";
import {
  LoginUsingGoogle,
  LoginUsingFacebook,
  GoogleCallback,
} from "rest/auth";
import { MetaCallback } from "rest/auth";
import { useGoogleLogin } from "@react-oauth/google";
import { useLogin } from "react-facebook";
import { FullPageLoader } from "components/Loader/FullPageLoader";

export const SocialLogins = () => {
  const { login } = useLogin();

  const [user, setUser] = useState("");
  const [facebookAuth, setFacebookAuth] = useState("");

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const loginByGoogle = LoginUsingGoogle(user?.access_token);

  const handleFacebookLogin = async () => {
    try {
      const response = await login({
        scope: "email",
      });
      setFacebookAuth(response);
    } catch (error) {
      console.log(error);
    }
  };

  const loginByFacebook = LoginUsingFacebook(
    facebookAuth?.authResponse?.userID,
    facebookAuth?.authResponse?.accessToken
  );

  const sendDataFromGoogle = GoogleCallback();
  const sendDataFromMeta = MetaCallback();

  useEffect(() => {
    if (loginByGoogle) {
      sendDataFromGoogle.mutate(loginByGoogle?.data);
    }
  }, [loginByGoogle]);

  useEffect(() => {
    if (loginByFacebook) {
      sendDataFromMeta.mutate(loginByFacebook?.data);
    }
  }, [loginByFacebook]);

  return (
    <>
      {sendDataFromGoogle?.isLoading || sendDataFromMeta?.isLoading ? (
        <FullPageLoader />
      ) : null}
      <div className="logins_socials">
        <button onClick={() => handleGoogleLogin()} className="googleLogin">
          <span>
            <FcGoogle />
          </span>
          Sign in with Google
        </button>
      </div>
      <div className="logins_socials">
        <button onClick={handleFacebookLogin} className="metaLogin">
          <span>
            <MetaIcon />
          </span>
          Sign in with Meta
        </button>
      </div>
    </>
  );
};
