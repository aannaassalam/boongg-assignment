import React, { useState } from "react";
import "./App.css";
import AddResume from "./layout/components/addResume/addResume";
import CreateAccount from "./layout/components/createAccount/createAccount";
import RightSide from "./layout/components/rightSide/rightSide";
import SaveYourResume from "./layout/components/saveYourResume/saveYourResume";
import { connect, Provider } from "react-redux";
import store from "./store";
import { uploadResume } from "./actions/uploadResume";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="left">
            <div className="breadcrumb">
              <div
                className={tab === 0 ? "step active" : "step"}
                onClick={() => setTab(0)}
              >
                <p>1. Add Resume</p>
              </div>
              <div
                className={tab === 1 ? "step active" : "step"}
                onClick={() => setTab(1)}
              >
                <p>2. Save Your Resume</p>
              </div>
              <div
                className={tab === 2 ? "step active" : "step"}
                onClick={() => setTab(2)}
              >
                <p>3. Create Your Account</p>
              </div>
            </div>
            <div className="body">
              {tab === 0 ? (
                <AddResume />
              ) : tab === 1 ? (
                <SaveYourResume />
              ) : (
                <CreateAccount />
              )}
            </div>
            <div className="container-footer">
              <p>Cancel</p>
              <button
                type="button"
                onClick={
                  tab === 0
                    ? () => {
                        // this.props.uploadResume();
                        setTab(1);
                      }
                    : tab === 1
                    ? () => {
                        // this.props.uploadResume();
                        setTab(2);
                      }
                    : () => {
                        // this.props.uploadResume();
                        setTab(0);
                      }
                }
              >
                {tab === 0
                  ? "Upload Resume"
                  : tab === 1
                  ? "Save Resume"
                  : "Sign Up"}
              </button>
            </div>
          </div>
          <div className="right">
            <RightSide />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
