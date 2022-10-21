import React from "react";
import imageUrl from "utils/imageUrl";
import Switch from "../switch";
function Header() {
  return (
    <header>
      <div className={`nav-bar home-header`}>
        <div className="logo logo-bg-color">
          <span>
            <img src={imageUrl("logo.png")} alt="logo.png" />
          </span>
        </div>
        <Switch />
        <div className="custom-box">
          <i className="fa fa-magnifying-glass custom-glass"></i>
          <input
            className="custom-input"
            type="text"
            id="fname"
            name="fname"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
