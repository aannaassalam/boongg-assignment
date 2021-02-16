import { UPLOAD_RESUME } from "./type";

export const uploadResume = (data) => (dispatch) => {
  dispatch({
    type: UPLOAD_RESUME,
    data: data,
  });
};
