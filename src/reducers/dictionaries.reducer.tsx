import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
  DELETE_DICTIONARY_ROW,
  ADD_DICTIONARY_ROW,
  UPDATE_DICTIONARY_ROW,
  DictionariesState,
  DictionariesActionTypes,
} from '../actions/types/dictionaries.action.type';

const initialState: DictionariesState = {
  id: -1,
  dictionaries: [],
};

interface Payload {
  dictionaryId: number;
}

let filteredRows;
let filteredDictionaries;
let dictionary;
let updatedRows;

let findDictionary = (state: DictionariesState, payload: Payload) =>
  state.dictionaries.filter(dictionary => dictionary.id === payload.dictionaryId);

const dictionariesReducer = (state = initialState, action: DictionariesActionTypes) => {
  switch (action.type) {
    case ADD_DICTIONARY:
      return {
        dictionaries: [...state.dictionaries, action.payload],
        id: action.payload.id,
      };
    case DELETE_DICTIONARY:
      const dictionaries = state.dictionaries.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        dictionaries,
      };
    case DELETE_DICTIONARY_ROW:
      dictionary = findDictionary(state, action.payload);
      filteredRows = dictionary[0].rows.filter(el => el.id !== action.payload.rowId);
      dictionary = { ...dictionary[0], rows: filteredRows };
      filteredDictionaries = state.dictionaries.filter(
        el => el.id !== action.payload.dictionaryId
      );
      return {
        ...state,
        dictionaries: [...filteredDictionaries, dictionary],
      };
    case ADD_DICTIONARY_ROW:
      dictionary = findDictionary(state, action.payload);
      updatedRows = [...dictionary[0].rows, action.payload.row];
      dictionary = { ...dictionary[0], rows: updatedRows };
      filteredDictionaries = state.dictionaries.filter(
        el => el.id !== action.payload.dictionaryId
      );
      return {
        ...state,
        dictionaries: [...filteredDictionaries, dictionary],
      };
    case UPDATE_DICTIONARY_ROW:
      dictionary = findDictionary(state, action.payload);
      filteredRows = dictionary[0].rows.filter(el => el.id !== action.payload.row.id);
      updatedRows = [...filteredRows, action.payload.row];
      dictionary = { ...dictionary[0], rows: updatedRows };
      filteredDictionaries = state.dictionaries.filter(
        el => el.id !== action.payload.dictionaryId
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
