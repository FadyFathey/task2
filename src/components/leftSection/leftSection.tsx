import React from "react";
import "./leftSection.css";
import { PiMagnifyingGlassThin, PiWarningCircleThin } from "react-icons/pi";
import { AiOutlineFileText } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const LeftSection = () => {
  return (
    <div className="right-holder">
      <div className="search">
        <div className="search-icon">
          <PiMagnifyingGlassThin />
        </div>
        <input
          type="text"
          placeholder="Serach by name, edu, exp or #tag"
        ></input>
        <div className="warning-icon">
          <PiWarningCircleThin />
        </div>
      </div>
      <div className="filters">
        <span>Filters</span>
        <span>0 selected</span>
      </div>
      <div className="filters-content">
        <div className="file-icon-1">
          <AiOutlineFileText />
        </div>
        <div className="filters-txt">
          <span>Personal Information</span>
        </div>
        <div className="filters-ic-2">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="filters-content">
        <div className="file-icon-1">
          <AiOutlineFileText />
        </div>
        <div className="filters-txt">
          <span>Education</span>
        </div>
        <div className="filters-ic-2">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="filters-content">
        <div className="file-icon-1">
          <AiOutlineFileText />
        </div>
        <div className="filters-txt">
          <span>Work Experience</span>
        </div>
        <div className="filters-ic-2">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="filters-content">
        <div className="file-icon-1">
          <AiOutlineFileText />
        </div>
        <div className="filters-txt">
          <span>Activity Filter</span>
        </div>
        <div className="filters-ic-2">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="filters-content">
        <div className="file-icon-1">
          <AiOutlineFileText />
        </div>
        <div className="filters-txt">
          <span>Advanced Filter</span>
        </div>
        <div className="filters-ic-2">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
