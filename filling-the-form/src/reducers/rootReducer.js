import { initialState } from "../store/initialState";
import {
  SET_FIRST_NAME,
  SET_SECOND_NAME,
  SET_EMAIL,
  SET_TELEPHONE,
  SET_CITY,
  SET_STREET,
  SET_HOME,
  SET_SUMMARY,
  SET_EXPERIENCE,
  SET_EDUCATION,
  SET_SKILLS,
  CLEAR_FORM
} from "../constants/actionsType";

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FIRST_NAME: {
      localStorage.setItem("firstName", payload);
      return { ...state, firstName: payload };
    }
    case SET_SECOND_NAME: {
      localStorage.setItem("secondName", payload);
      return { ...state, secondName: payload };
    }
    case SET_TELEPHONE: {
      localStorage.setItem("telephone", payload);
      return { ...state, telephone: payload };
    }
    case SET_EMAIL: {
      localStorage.setItem("email", payload);
      return { ...state, email: payload };
    }
    case SET_CITY: {
      localStorage.setItem("city", payload);
      return { ...state, city: payload };
    }
    case SET_STREET: {
      localStorage.setItem("street", payload);
      return { ...state, street: payload };
    }
    case SET_HOME: {
      localStorage.setItem("home", payload);
      return { ...state, home: payload };
    }
    case SET_SUMMARY: {
      localStorage.setItem("summary", payload);
      return { ...state, summary: payload };
    }
    case SET_EDUCATION: {
      localStorage.setItem("education", payload);
      return {
        ...state,
        education: payload
      };
    }
    case SET_EXPERIENCE: {
      localStorage.setItem("experience", payload);
      return {
        ...state,
        experience: payload
      };
    }
    case SET_SKILLS: {
      localStorage.setItem("skills", payload);
      return {
        ...state,
        skills: payload
      };
    }
    case CLEAR_FORM: {
      localStorage.clear();
      return {
        ...state,
        firstName: "",
        secondName: "",
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
    default:
      return state;
  }
};
