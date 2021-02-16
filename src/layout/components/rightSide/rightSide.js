import React, { Component } from "react";
import "./rightSide.css";
import document from "../../../assets/document.svg";
import check from "../../../assets/check.png";

export default class RightSide extends Component {
  render() {
    return (
      <div className="rightSide">
        <img src={document} alt="" className="document" />
        <h5>Uploading a resume makes applying to jobs easy!</h5>
        <div className="points">
          <div className="point">
            <img src={check} alt="" />
            <p>
              Make your resume public to be visible to Hiring Managers and
              Employers
            </p>
          </div>
          <div className="point">
            <img src={check} alt="" />
            <p>
              Speed up the application process with Quick Apply. You can apply
              to join with just one click!
            </p>
          </div>
          <div className="point">
            <img src={check} alt="" />
            <p>
              See similar job titles and skills to help you make your next move.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
