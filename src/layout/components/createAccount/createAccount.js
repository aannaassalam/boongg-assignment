import React, { Component } from "react";
import "./createAccount.css";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      zipCode: "",
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="createAccount">
        <h4>
          Sign Up <span>or </span>
          <span>Sign In Here</span>
        </h4>
        <div className="socialMedia">
          <div className="facebook">
            <i className="fab fa-facebook-square"></i>
            <p>Sign up with Facebook</p>
          </div>
          <div className="google">
            <i className="fab fa-google"></i>
            <p>Sign up with Google</p>
          </div>
        </div>
        <div className="orSection">
          <p>OR</p>
        </div>

        <div className="form">
          <div className="inputField">
            <p>First Name *</p>
            <input type="text" />
          </div>
          <div className="inputField">
            <p>Last Name *</p>
            <input type="text" />
          </div>
          <div className="inputField">
            <p>Zipcode *</p>
            <input type="number" />
          </div>
          <div className="inputField">
            <p>Email *</p>
            <input type="email" />
          </div>
          <div className="inputField">
            <p>Password *</p>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
