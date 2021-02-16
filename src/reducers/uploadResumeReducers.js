import { UPLOAD_RESUME } from "../actions/type";

const initialState = {
  resume: [],
  firstName: "",
  lastName: "",
  zipCode: "",
  email: "",
  password: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_RESUME:
      return {
        ...state,
        resume: action.data.resume,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        zipCode: action.data.zipCode,
        email: action.data.email,
        password: action.data.password,
      };

    default:
      return state;
  }
}
