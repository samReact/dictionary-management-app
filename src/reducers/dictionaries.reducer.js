import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
} from '../actions/types/dictionaries.action.type';

const initialState = {
  dictionaries: [],
  id: -1,
};

const dictionariesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DICTIONARY:
      return {
        dictionaries: [...state.dictionaries, payload],
        id: payload.id,
      };
    case DELETE_DICTIONARY:
      const dictionaries = state.dictionaries.filter(el => el.id !== payload.id);
      return {
        ...state,
        dictionaries,
      };
    default:
      return state;
  }
};

export default dictionariesReducer;
