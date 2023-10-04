import React, { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GoBell } from "react-icons/go";

import user from "app/assets/user-img.jpg";

export const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className="header">
      <div className={`position-relative w-75 ${openMenu ? "w-100" : ""}`}>
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
              <h3>nicolelopez</h3>
              <p>Nicole Lopez</p>
            </div>
          </div>
        </div>

        <div className={`menu ${menuToggle ? "dropdown_active" : ""}`}>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
