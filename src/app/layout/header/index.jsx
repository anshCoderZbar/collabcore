import React, { useEffect, useRef, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { HiOutlineChevronDown } from "react-icons/hi";

import user from "app/assets/user-img.jpg";
import { MenuIcons } from "app/mock/header";
import { LogoutIcon } from "app/icons";
import { VerifyIcon } from "app/icons";

export const Header = () => {
  const menuRef = useRef(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const [openMenu, setopenMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef?.current?.contains(event?.target) &&
        menuToggle
      ) {
        setMenuToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuToggle, setMenuToggle]);

  return (
    <div className="header">
      <div className={`position-relative w-100 ${openMenu ? "w-100" : ""}`}>
        {openMenu && (
          <div onClick={() => setopenMenu(false)} className={`go_back_icon`}>
            <IoMdArrowRoundBack />
          </div>
        )}
        <div
          className={`head-input  ${
            openMenu ? "d-block" : "d-none"
          }  d-md-block`}
        >
          <input
            type="text"
            placeholder="Type anywhere to search"
            className={`w-100 `}
          />
        </div>
        <div
          onClick={() => setopenMenu(true)}
          className={`search_icon ${openMenu ? "d-none" : ""}`}
        >
          <AiOutlineSearch />
        </div>
      </div>
      <div className="d-flex align-items-center header_right">
        <div className={`bell_icon  ${openMenu ? "d-none" : ""}`}>
          <GoBell />
        </div>
        <div className={` ${openMenu ? "d-none" : ""}`}>
          <div
            className="d-flex align-items-center gap-2"
            style={{ cursor: "pointer " }}
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <div className="img-box">
              <img src={user} alt="some user image" />
            </div>
            <div className="profile">
              <div className="user">
                <h3 className="d-flex align-items-center gap-2">
                  nicolelopez
                  <span>
                    <VerifyIcon />
                  </span>
                </h3>
                <p>Nicole Lopez</p>
              </div>
              <div
                className={`menu_down_icon ${
                  menuToggle ? "menu_down_icon_rotate" : ""
                }`}
              >
                <HiOutlineChevronDown />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`menu ${menuToggle ? "dropdown_active" : ""}`}
        >
          <div className="d-flex align-items-center gap-2 px-3 py-2 bg_btm_menu">
            <div className="img-box">
              <img src={user} alt="some user image" />
            </div>
            <div className="profile">
              <div className="user">
                <h3 className="text-start">nicolelopez</h3>
                <p>nicolelopez@gmail.com</p>
              </div>
            </div>
          </div>
          <ul>
            {MenuIcons?.map((menu, i) => {
              return (
                <li
                  key={i}
                  className={`${menu?.border_btm ? "bg_btm_menu" : ""}`}
                >
                  <a href="#">
                    <span>{menu?.icon}</span>
                    {menu?.name}
                  </a>
                </li>
              );
            })}
            <li className="logout_btn">
              <button>
                <span>
                  <LogoutIcon />
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
