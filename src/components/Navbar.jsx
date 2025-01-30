import React from "react";
import "./../styles/nav.css";
function Navbar() {
  return (
    <div className="NavContainer">
      <div className="NavLogo">
        <p>{"{yeab}"}</p>
      </div>
      <div className="NavLinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#ab">About</a>
          </li>
          <li>
            <a href="#cont">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
