import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
  DELETE_DICTIONARY_ROW,
  ADD_DICTIONARY_ROW,
  UPDATE_DICTIONARY_ROW,
  DictionariesActionTypes,
  Dictionary,
  DictionaryId,
  DictionaryRowIds,
  DictionaryRow,
} from './types/dictionaries.action.type';

export const addDictionary = (payload: Dictionary): DictionariesActionTypes => ({
  payload,
  type: ADD_DICTIONARY,
});

export const deleteDictionary = (payload: DictionaryId): DictionariesActionTypes => ({
  payload,
  type: DELETE_DICTIONARY,
});

export const deleteDictionaryRow = (
  payload: DictionaryRowIds
): DictionariesActionTypes => ({
  payload,
  type: DELETE_DICTIONARY_ROW,
});

export const addDictionaryRow = (payload: DictionaryRow): DictionariesActionTypes => ({
  payload,
  type: ADD_DICTIONARY_ROW,
});

export const updateDictionaryRow = (payload: DictionaryRow): DictionariesActionTypes => ({
  payload,
  type: UPDATE_DICTIONARY_ROW,
});
