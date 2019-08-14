import { initialState } from "../store/initialState";
import { CHANGE_VALUE, CLEAR_FORM } from "../constants/actionsType";

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_FORM: {
      localStorage.clear();
      return {
        ...state,
        name: "",
        surname: "",
        telephone: "",
        email: "",
        city: "",
        street: "",
        home: "",
        summary: "",
        education: "",
        experience: "",
        skills: ""
      };
    }
    case CHANGE_VALUE: {
      localStorage.setItem(Object.keys(payload)[0], Object.values(payload)[0]);
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
