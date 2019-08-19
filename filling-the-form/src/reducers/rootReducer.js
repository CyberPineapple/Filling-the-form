import { initialState } from "../store/initialState";
import { CHANGE_VALUE, CLEAR_FORM } from "../constants/actionsType";

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_FORM: {
      localStorage.clear();
      const newValuesForm = {...state.fields};
      for (let key in newValuesForm) {
        newValuesForm[key].value = ''
      }
      return {
        ...state,
        fields: {
          ...newValuesForm}
        }
      };
    case CHANGE_VALUE: {
      localStorage.setItem(payload.title, payload.value);
      return {
        ...state,
        fields: {
          ...state.fields,
          [payload.title]: { ...state.fields[payload.title], ...payload }
        }
      };
    }
    default:
      return state;
  }
};
