import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormInput } from "components/Form-Input/Input";
import { onboardSchema } from "app/common/auth/validation";

import "styles/OnBoarding.css";
import logo from "app/assets/logo.png";
import user from "app/assets/user-img.jpg";
import { useToken } from "lib/utils/UseToken";
import { useNavigate } from "react-router-dom";

export const Onboarding = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-applied-mode", "light");
  }, []);
  const navigate = useNavigate();
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(user);

  const { setToken } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(onboardSchema) });
  const handleChange = (file) => {
    setFile(file);
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImg(objectUrl);
    }
  }, [file]);

  const onBoard = (data) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({ userData: data, auth: true })
    );
    setToken(true);
    navigate("/");
  };

  return (
    <div className="onboarding_page">
      <div className="onboarding_header">
        <div className="onBoard_auth_logo">
          <img src={logo} alt="collabcore" />
        </div>
        <div className="onboard_steps">
          <button>Account</button>
          <span>{">"}</span>
          <button className="onboard_btn_active">Setup</button>
          <span>{">"}</span>
          <button>Connect</button>
        </div>
      </div>
      <div className="setup_acc">
        <div className="setup_container">
          <h2>Setup your account</h2>
          <div className="setup_select">
            <p className="setup-sub-head">What best describes you?</p>
            <select
              className="form-select form_onboard"
              {...register("select")}
            >
              <option value="">Creator/Influencer/Model</option>
              <option value="creator">Creator</option>
              <option value="influencer">Influencer</option>
              <option value="model">Model</option>
            </select>
            {errors?.select && (
              <p className="errorMessage">{errors?.select?.message}</p>
            )}
          </div>
          <div className="profile_set">
            <p className="setup-sub-head">Enter Your profile details</p>
            <form onSubmit={handleSubmit(onBoard)}>
              <div className="mb-3">
                <FormInput
                  type="text"
                  className="form-control input_onb"
                  placeholder="Vivian Stuart"
                  {...register("profileName")}
                />
                {errors?.profileName && (
                  <p className="errorMessage">{errors?.profileName?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <FormInput
                  type="text"
                  className="form-control input_onb"
                  placeholder="@vivstuart"
                  {...register("userName")}
                />
                {errors?.userName && (
                  <p className="errorMessage">{errors?.userName?.message}</p>
                )}
              </div>
              <div className="upload_profile">
                <p className="setup-sub-head">Upload a picture</p>
                <div className="upload_profile_img">
                  <img src={img} alt="profile" className="" />
                </div>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  multiple={false}
                  maxSize={1}
                  hoverTitle="Drop here"
                />
              </div>
              <div className="mb-3">
                <input type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center onpage_btm w-100">
        <p className="copyright">© {new Date().getFullYear()} CollabCore</p>
        <p className="privacy_policy">Privacy Policy</p>
      </div>
    </div>
  );
};
