import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SidebarData } from "app/mock/sidebar";

import logo from "app/assets/logo.png";
import { TbLogout } from "react-icons/tb";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useToken } from "lib/utils/UseToken";
import { DarkModeIcon } from "app/icons";
import { SettingIcon } from "app/icons";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [sidebarActive, setSidebarActive] = useState(false);
  const { removeToken } = useToken();
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-applied-mode", "dark");
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-applied-mode", "light");
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme === "light") {
      setLight();
    } else if (getTheme === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeTheme = (e) => {
    const currentMode =
      document.documentElement.getAttribute("data-applied-mode");

    if (currentMode === "light") {
      setDark();
    } else if (currentMode === "dark") {
      setLight();
    } else {
      setLight();
    }
  };

  return (
    <div
      className={`dashboard_sidebar ${sidebarActive ? "dashboard_active" : ""}`}
    >
      <div
        className="menu_icon"
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        <MdOutlineKeyboardArrowLeft />
      </div>
      <Link to={"/dashboard"} className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <ul className="nav-items">
          <p>General</p>
          {SidebarData?.map((menu, i) => {
            return (
              <li
                key={i}
                className={`${
                  window?.location?.pathname === menu?.slug
                    ? "side_active "
                    : ""
                }`}
              >
                <div className="d-flex gap-2 align-items-center   ">
                  <div
                    className={`sidebar_icon ${
                      window?.location?.pathname === menu?.slug
                        ? "sidebar_icon_active "
                        : ""
                    }`}
                  >
                    {menu?.icon}
                  </div>
                  <Link to={menu?.slug}>{menu?.name}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-links side_sec">
        <ul className="nav-items">
          <p>Preferences</p>
          <li>
            <div
              className="d-flex gap-2 align-items-center"
              onClick={changeTheme}
            >
              <div className="icon">
                <DarkModeIcon />
              </div>
              <button className="side_btn">Dark Mode</button>
            </div>
          </li>
          <li>
            <div className="d-flex gap-2 align-items-center">
              <div className="icon">
                <SettingIcon />
              </div>
              <button className="side_btn">Settings</button>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                console.log("hello world");
                removeToken();
                navigate("/login");
              }}
              className="d-flex gap-2 align-items-center"
            >
              <div className="icon">
                <TbLogout />
              </div>
              <button className="side_btn">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
