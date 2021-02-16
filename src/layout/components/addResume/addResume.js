import React, { Component } from "react";
import "./addResume.css";

export default class AddResume extends Component {
  render() {
    return (
      <div className="addResume">
        <h4>Add Your Resume</h4>
        <p className="description">
          Use our uploader to save your resume and reach thousands of acive
          employers.
        </p>

        <div className="form">
          <div className="input-field">
            <h5>Desired Job Title</h5>
            <input type="text" placeholder="Enter Desired job title here..." />
          </div>
          <div className="optionSection">
            <h5>Upload Options</h5>
            <div className="options">
              <label className="option" htmlFor="resume">
                <i className="fas fa-upload"></i>
                <p>Upload Resume</p>
                <input type="file" id="resume" />
              </label>
              <div className="option" htmlFor="copy">
                <i className="fas fa-file-alt"></i>
                <p>Copy and Paste Resume</p>
                <input type="file" id="copy" />
              </div>
              <div className="option" htmlFor="dropbox">
                <i className="fab fa-dropbox"></i>
                <p>Add from Dropbox</p>
                <input type="file" id="dropbox" />
              </div>
              <div className="option" htmlFor="drive">
                <i className="fab fa-google-drive"></i>
                <p>Add from Google Drive</p>
                <input type="file" id="drive" />
              </div>
            </div>
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
