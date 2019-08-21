import { initialState } from "../store/initialState";
import { CHANGE_VALUE, CLEAR_FORM } from "../constants/actionsType";

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_FORM: {
      localStorage.clear();
      return initialState;
    }
    case CHANGE_VALUE: {
      const { fields } = state;
      const { title, value } = payload;
      localStorage.setItem(title, value);
      return {
        ...state,
        fields: {
          ...fields,
          [title]: { ...fields[title], ...payload }
        }
      };
    }
    default:
      return state;
  }
};
