import "../Header.scss";
import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "../assets/images/logo.svg";
import { closeIcon } from "../assets/images/icon-menu-close.svg";
import { menuIcon } from "../assets/images/icon-menu.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="" />
      </h1>
      <ul className={menu ? "menu active" : "menu"}>
        <li>Home</li>
        <li>News</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
        {/* testing whether img can work or not */}
        {/* {menu ? (
          <li>
            <img src={closeIcon} alt="" />
          </li>
        ) : (
          <li>
            <img src={menuIcon} alt="" />
          </li>
        )} */}
      </ul>
      <div className="icons" onClick={handleClick}>
        {menu ? (
          <FaRegTimesCircle className="icon" />
        ) : (
          <HiOutlineMenuAlt1 className="icon" />
        )}

        {/* {menu ? <img src={closeIcon} alt="" /> : <img src={menuIcon} alt="" />} */}
      </div>
    </header>
  );
};

export default Header;
