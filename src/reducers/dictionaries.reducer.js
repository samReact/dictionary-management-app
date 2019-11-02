import { ADD_DICTIONARY } from '../actions/types/dictionaries.action.type';

const initialState = {
  dictionaries: [],
};

const dictionariesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DICTIONARY:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default dictionariesReducer;
