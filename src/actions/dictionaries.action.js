import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
  DELETE_DICTIONARY_ROW,
  ADD_DICTIONARY_ROW,
  UPDATE_DICTIONARY_ROW,
  DELETE_DICTIONARY_ROW_WARNING,
} from './types/dictionaries.action.type';

export const addDictionary = payload => ({
  payload,
  type: ADD_DICTIONARY,
});

export const deleteDictionary = payload => ({
  payload,
  type: DELETE_DICTIONARY,
});

export const deleteDictionaryRow = payload => ({
  payload,
  type: DELETE_DICTIONARY_ROW,
});

export const addDictionaryRow = payload => ({
  payload,
  type: ADD_DICTIONARY_ROW,
});

export const updateDictionaryRow = payload => ({
  payload,
  type: UPDATE_DICTIONARY_ROW,
});

export const deleteDictionaryRowWarning = payload => ({
  payload,
  type: DELETE_DICTIONARY_ROW_WARNING,
});
