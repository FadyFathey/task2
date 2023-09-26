import React from "react";
import "./rightSection.css";
import { PiPlayCircleLight, PiNotebookLight } from "react-icons/pi";

const RightSection = () => {
  return (
    <div className="rightSection">
      <div className="candidates">
        <div className="first-part">
          <label className="input-box">
            <input type="checkbox" />
          </label>
          <span className="c-no">247 Candidates</span>
        </div>
        <span className="qualified">Qualified</span>
        <span className="word">
          Task <span className="ts-no">25</span>
        </span>
        <span className="word">
          Disqualified <span className="ts-no">78</span>
        </span>
      </div>

      <div className="candidates-details">
        <div className="ca-first-part">
          <label className="input-box">
            <input type="checkbox" />
          </label>
          <div className="as">
            <span>AS</span>
          </div>
        </div>
        <div className="second-part">
          <span className="ca-name">Aaliyah Sanderson</span>
          <span className="ca-add">Riyadh, Saudi Arabia</span>
          <span className="ca-col">
            Bachelor - Cambridge University (2023 - 2023)
          </span>
          <div className="top-ca">
            <span className="ca-degree">#top_candidate</span>
            <span className="ca-degree">#top_candidate</span>
          </div>
          <div className="ca-box-holder">
            <span className="ca-box">New York</span>
            <span className="ca-box">Marketing</span>
            <span className="ca-box">London</span>
          </div>
        </div>
      </div>

      <div className="candidates-details">
        <div className="ca-first-part">
          <label className="input-box">
            <input type="checkbox" />
          </label>
          <div className="as">
            <span>AS</span>
          </div>
        </div>
        <div className="second-part">
          <span className="ca-name">John Doe</span>
          <span className="ca-add">Bostom, USA</span>
          <span className="ca-col">Bachelor - MIT (2023 - 2023)</span>
          <div className="top-ca">
            <span className="ca-degree">#top_candidate</span>
            <span className="ca-degree">#top_candidate</span>
          </div>
          <div className="ca-box-holder">
            <span className="ca-box">New York</span>
            <span className="ca-box">Marketing</span>
            <span className="ca-box">London</span>
          </div>
        </div>
      </div>

      <div className="candidates-details">
        <div className="ca-first-part">
          <label className="input-box">
            <input type="checkbox" />
          </label>
          <div className="as">
            <span>AS</span>
          </div>
        </div>
        <div className="second-part">
          <span className="ca-name">Thomas Matt</span>
          <span className="ca-add">Edinburgh, UK</span>
          <span className="ca-col">
            Bachelor - Harvard University (2023 - 2023)
          </span>
          <div className="top-ca">
            <span className="ca-degree">#top_candidate</span>
            <span className="ca-degree">#top_candidate</span>
          </div>
          <div className="ca-box-holder">
            <span className="ca-box">New York</span>
            <span className="ca-box">Marketing</span>
            <span className="ca-box">London</span>
          </div>
        </div>
      </div>

      <div className="candidates-details">
        <div className="ca-first-part">
          <label className="input-box">
            <input type="checkbox" />
          </label>
          <div className="as">
            <span>AS</span>
          </div>
        </div>
        <div className="second-part">
          <span className="ca-name">Kamilia Smith</span>
          <span className="ca-add">London, UK</span>
          <span className="ca-col">
            Bachelor - Harvard University (2023 - 2023)
          </span>
          <div className="top-ca">
            <span className="ca-degree">#top_candidate</span>
            <span className="ca-degree">#top_candidate</span>
          </div>
          <div className="ca-box-holder">
            <span className="ca-box">New York</span>
            <span className="ca-box">Marketing</span>
            <span className="ca-box">London</span>
          </div>
        </div>
      </div>

      <div className="candidates-details">
        <div className="ca-first-part">
          <label className="input-box">
            <input type="checkbox" />
          </label>
          <div className="as">
            <span>AS</span>
          </div>
        </div>
        <div className="second-part">
          <div className="ca-Programs">
            <span className="ca-name">Kamilia Smith</span>
            <div className="ca-icons">
              <div className="ic-1">
                <PiPlayCircleLight /> <span>4</span>
              </div>
              <div className="ic-2">
                <PiNotebookLight /> <span>5 Programs</span>
              </div>
            </div>
          </div>
          <span className="ca-add">Riyadh, Saudi Arabia</span>
          <span className="ca-col">
            Bachelor - Cambridge University (2023 - 2023)
          </span>
          <div className="top-ca">
            <span className="ca-degree">#top_candidate</span>
            <span className="ca-degree">#top_candidate</span>
          </div>
          <div className="ca-box-holder">
            <span className="ca-box">New York</span>
            <span className="ca-box">Marketing</span>
            <span className="ca-box">London</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
