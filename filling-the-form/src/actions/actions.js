import { CHANGE_VALUE, CLEAR_FORM } from "../constants/actionsType";

export const clearFormAction = () => ({
  type: CLEAR_FORM
});

export const changeValueAction = (value, name) => ({
  type: CHANGE_VALUE,
  payload: { [name]: value }
});
