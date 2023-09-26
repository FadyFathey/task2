import React from "react";
import "./sideBar.css";
import { PiUsersThree, PiHouseBold ,PiNotebookLight } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineFileText, AiOutlineHeart } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-content">
        <div className="icons">
          <div className="person"></div>
          <div className="home">
            <PiHouseBold />
          </div>

          <PiUsersThree />
          <i className="fa-regular fa-calendar-check"></i>
          <CiShare2 />
          <AiOutlineFileText />
          <PiNotebookLight/>
          <AiOutlineHeart />
          <BiChevronLeft />
        </div>
      </div>

      <div className="side-bar-footer">
        <RiSettings4Line className="icon-footer" />
        <div className="as">
          <span>AS</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
