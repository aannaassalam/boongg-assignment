import React, { Component } from "react";
import "./saveYourResume.css";

export default class SaveYourResume extends Component {
  render() {
    return (
      <div className="saveYourResume">
        <h4>Save Your Resume</h4>
        <p className="description">
          Use our uploader to save your resume and reach thousands of acive
          employers.
        </p>

        <div className="form">
          <div className="input-field">
            <h5>Resume Name</h5>
            <input type="text" placeholder="Enter Desired job title here..." />
          </div>
          <div className="input-field">
            <h5>
              Resume Name <span>(click to select)</span>
            </h5>
            <button
              type="button"
              onClick={() => document.getElementById("resumeButton").click()}
            >
              james-new-resume.pdf
            </button>
            <input type="file" id="resumeButton" />
          </div>
        </div>

        <h5>Resume Privacy</h5>
        <div className="checkbox-input">
          <input type="checkbox" />
          <p>
            <a href="">Public Resume </a> visible to all employer's searching
            resume. <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>
    );
  }
}
