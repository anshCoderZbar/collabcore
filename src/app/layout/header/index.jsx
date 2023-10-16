import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "lib/utils/UseToken";

import { userDetails } from "store/Authenticaton";
import { useAuth } from "lib/utils/UseAuth";
import { useAtom } from "jotai";
import { MenuIcons } from "app/mock/header";

import { LogoutIcon } from "app/icons";
import { VerifyIcon } from "app/icons";
import { GoBell } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiOutlineChevronDown } from "react-icons/hi";

export const Header = () => {
  const navigate = useNavigate();
  const { removeToken } = useToken();
  const { removeAuth } = useAuth();

  const [authenticaton] = useAtom(userDetails);
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

  console.log(authenticaton);

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
              <img
                src={
                  authenticaton?.basepath
                    ? `${authenticaton?.basepath}/${authenticaton?.picture}`
                    : authenticaton?.picture
                }
                alt="some user image"
              />
            </div>
            <div className="profile">
              <div className="user">
                <h3 className="d-flex align-items-center gap-1 md-gap-2">
                  {authenticaton?.username}
                  <span>
                    <VerifyIcon />
                  </span>
                </h3>
                <p>{authenticaton?.name}</p>
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
              <img
                src={
                  authenticaton?.basepath
                    ? `${authenticaton?.basepath}/${authenticaton?.picture}`
                    : authenticaton?.picture
                }
                alt="some user image"
              />
            </div>
            <div className="profile">
              <div className="user">
                <h3 className="text-start menu_li_head">
                  {authenticaton?.name}
                </h3>
                <p>{authenticaton?.email}</p>
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
              <button
                onClick={() => {
                  removeToken();
                  removeAuth();
                  navigate("/login");

                  window.location.reload();
                }}
              >
                <span>
                  <LogoutIcon />
                </span>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
