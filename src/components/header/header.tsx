import React, { useState } from "react";
import "./header.css";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiUserX, BiUserCheck, BiUserVoice } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="header-text">
        <h3>London Internship Program</h3>
        <span>London</span>
      </div>
      <div className={`header-dropdown ${isDropdownOpen ? "open" : ""}`}>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            <span className="op-no">247</span>
            <span style={{ width: "200px" }}>
              <div className="comma"></div>
              <div className="op">Opportunity Browsing</div>
            </span>
            <span className="after-op">243</span>
            <IoIosArrowDown className="drop-ic" />
          </button>
          <div className="dropdown-content">
            <a href="#">
              Applied <span>1745</span>
            </a>
            <a href="#">
              Offer <span>1745</span>
            </a>
            <a href="#">
              Applied <span>1745</span>
            </a>
            <a href="#">
              Applied <span>1745</span>
            </a>
            <a href="#" className="active">
              Applied <span className="active number-active">1745</span>
            </a>
            <a href="#">
              Applied <span>1745</span>
            </a>
            <a href="#">
              Applied <span>1745</span>
            </a>
            <a href="#">
              Applied <span>1745</span>
            </a>
            <a href="#">
              Applied <span>1745</span>
            </a>
          </div>
        </div>
      </div>
      <div className="icons">
        <MdOutlineLocalOffer className="icons-holder" />
        <BiUserX
          className="icons-holder"
          style={{ width: "40px", color: "#A80000", background: "white" }}
        />
        <BiUserCheck
          className="icons-holder"
          style={{ width: "40px", background: "white" }}
        />
        <BiUserVoice
          className="icons-holder"
          style={{ width: "40px", background: "white" }}
        />
        <CiMail
          className="icons-holder"
          style={{ width: "40px", background: "white" }}
        />
      </div>
      <div className="confirm-btn">
        <button>Move To Video Interview </button>
        <div className="button-icon">
          <IoIosArrowDown style={{ color: "white", marginTop: "13px" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
