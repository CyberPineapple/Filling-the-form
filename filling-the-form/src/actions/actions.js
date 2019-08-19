import { CHANGE_VALUE, CLEAR_FORM } from "../constants/actionsType";

export const clearFormAction = () => ({
  type: CLEAR_FORM
});

export const changeFormFieldAction  = (value, title) => ({
  type: CHANGE_VALUE,
  payload: { title, value}
});
