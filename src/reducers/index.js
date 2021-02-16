import { combineReducers } from "redux";
import uploadResume from "../reducers/uploadResumeReducers";

export default combineReducers({
  resumeUpload: uploadResume,
});
