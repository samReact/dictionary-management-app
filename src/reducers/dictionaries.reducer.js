import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
  DELETE_DICTIONARY_ROW,
  ADD_DICTIONARY_ROW,
  UPDATE_DICTIONARY_ROW,
} from '../actions/types/dictionaries.action.type';

const initialState = {
  dictionaries: [],
  id: -1,
};

let filteredRows;
let filteredDictionaries;
let dictionary;
let updatedRows;

let findDictionary = (state, payload) =>
  state.dictionaries.filter(el => el.id === payload.dictionaryId);

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
    case DELETE_DICTIONARY_ROW:
      dictionary = findDictionary(state, payload);
      filteredRows = dictionary[0].rows.filter(el => el.id !== payload.rowId);
      dictionary = { ...dictionary[0], rows: filteredRows };
      filteredDictionaries = state.dictionaries.filter(
        el => el.id !== payload.dictionaryId
      );
      return {
        ...state,
        dictionaries: [...filteredDictionaries, dictionary],
      };
    case ADD_DICTIONARY_ROW:
      dictionary = findDictionary(state, payload);
      updatedRows = [...dictionary[0].rows, payload.row];
      dictionary = { ...dictionary[0], rows: updatedRows };
      filteredDictionaries = state.dictionaries.filter(
        el => el.id !== payload.dictionaryId
      );
      return {
        ...state,
        dictionaries: [...filteredDictionaries, dictionary],
      };
    case UPDATE_DICTIONARY_ROW:
      dictionary = findDictionary(state, payload);
      filteredRows = dictionary[0].rows.filter(el => el.id !== payload.row.id);
      updatedRows = [...filteredRows, payload.row];
      dictionary = { ...dictionary[0], rows: updatedRows };
      filteredDictionaries = state.dictionaries.filter(
        el => el.id !== payload.dictionaryId
      );
      return {
        ...state,
        dictionaries: [...filteredDictionaries, dictionary],
      };

    default:
      return state;
  }
};

export default dictionariesReducer;
