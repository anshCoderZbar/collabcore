import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordValidator } from "app/common/auth/state";

import "styles/Auth.css";

import { signInSchema } from "app/common/auth/validation";

import logo from "app/assets/logo.png";
import user from "app/assets/user-img.jpg";

import { ImCheckmark } from "react-icons/im";
import { FormInput } from "components/Form-Input/Input";
import { SocialLogins } from "app/common/auth/SocialLogins";

export const SignUp = () => {
  const navigate = useNavigate();
  const [validationResults, setValidationResults] = useState(passwordValidator);

  useEffect(() => {
    document.documentElement.setAttribute("data-applied-mode", "light");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(signInSchema) });

  const validatePassword = (newPassword) => {
    const updatedValidationResults = {
      lowercaseValid: /[a-z]/.test(newPassword),
      uppercaseValid: /[A-Z]/.test(newPassword),
      numberValid: /[0-9]/.test(newPassword),
      lengthValid: newPassword.length >= 8,
      specialCharValid: /[#?!@$%^&*-]/.test(newPassword),
    };

    setValidationResults(updatedValidationResults);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    validatePassword(newPassword);
  };

  const signIn = (data) => {
    console.log(data);
    navigate("/account-setup");
  };

  return (
    <div className="auth_page">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 logins_details hei_smal">
            <div className="auth_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="auth_methods">
              <div className="auth_heading">
                <h2>Create Your account</h2>
                <p>Enter the fields below to get started</p>
              </div>
              <SocialLogins />
              <div className="separator">
                <div className="line"></div>
                <h2>or</h2>
                <div className="line"></div>
              </div>
              <div className="auth_input">
                <form onSubmit={handleSubmit(signIn)}>
                  <div className="mb-3">
                    <FormInput
                      type="text"
                      className="form-control input_vss"
                      placeholder="Enter Email"
                      {...register("email")}
                    />
                    {errors?.email && (
                      <p className="errorMessage">{errors?.email?.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <FormInput
                      type="password"
                      className="form-control input_vss"
                      placeholder="Enter password"
                      autoComplete="false"
                      {...register("password", {
                        onChange: handlePasswordChange,
                      })}
                    />
                  </div>
                  <div className="mb-3 ">
                    <div className="row">
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span
                            className={`${
                              validationResults.lowercaseValid
                                ? "bg-success"
                                : ""
                            }`}
                          >
                            <ImCheckmark />
                          </span>
                          one lowercase character
                        </p>
                      </div>
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span
                            className={`${
                              validationResults.specialCharValid
                                ? "bg-success"
                                : ""
                            }`}
                          >
                            <ImCheckmark />
                          </span>
                          one special character
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span
                            className={`${
                              validationResults.uppercaseValid
                                ? "bg-success"
                                : ""
                            }`}
                          >
                            <ImCheckmark />
                          </span>
                          one uppercase character
                        </p>
                      </div>
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span
                            className={`${
                              validationResults.lengthValid ? "bg-success" : ""
                            }`}
                          >
                            <ImCheckmark />
                          </span>
                          8 character minimum
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span
                            className={`${
                              validationResults.numberValid ? "bg-success" : ""
                            }`}
                          >
                            <ImCheckmark />
                          </span>
                          one number
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="submit_btn">
                    <input type="submit" value="Create Account" />
                  </div>
                </form>
                <div className="route_auth">
                  <p>
                    Already have an account?
                    <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center page_btm w-100">
              <p className="copyright">
                © {new Date().getFullYear()} CollabCore
              </p>
              <p className="privacy_policy">Privacy Policy</p>
            </div>
          </div>
          <div className="col-md-6 auth_img">
            <div className="img_content">
              <p>
                I was glad the day I discovered CollabCore. It really changed
                the way I manage my collaborations and made things incredibly
                easy.
              </p>
              <div className="d-flex align-items-center gap-2">
                <div className="img-box">
                  <img src={user} alt="some user " />
                </div>
                <div className="auth_profile">
                  <div className="auth_user">
                    <h3>Vivian Stuart</h3>
                    <p>@vivian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
