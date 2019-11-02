import { ADD_DICTIONARY, DELETE_DICTIONARY } from './types/dictionaries.action.type';

export const addDictionary = payload => ({
  payload,
  type: ADD_DICTIONARY,
});

export const deleteDictionary = payload => ({
  payload,
  type: DELETE_DICTIONARY,
});
