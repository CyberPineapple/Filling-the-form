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

export const setFirstNameAction = value => ({
  type: SET_FIRST_NAME,
  payload: value
});

export const setSecondNameAction = value => ({
  type: SET_SECOND_NAME,
  payload: value
});

export const setEmailAction = value => ({
  type: SET_EMAIL,
  payload: value
});

export const setTelephoneAction = value => ({
  type: SET_TELEPHONE,
  payload: value
});

export const setCityAction = value => ({
  type: SET_CITY,
  payload: value
});

export const setStreetAction = value => ({
  type: SET_STREET,
  payload: value
});

export const setHomeAction = value => ({
  type: SET_HOME,
  payload: value
});

export const setSummaryAction = value => ({
  type: SET_SUMMARY,
  payload: value
});

export const setEducationAction = value => ({
  type: SET_EDUCATION,
  payload: value
});

export const setExperienceAction = value => ({
  type: SET_EXPERIENCE,
  payload: value
});

export const setSkillsAction = value => ({
  type: SET_SKILLS,
  payload: value
});

export const clearFormAction = () => ({
  type: CLEAR_FORM
});
