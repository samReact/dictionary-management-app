import { ADD_DICTIONARY } from './types/dictionaries.action.type';

export const sourceChange = payload => ({
  payload,
  type: ADD_DICTIONARY,
});
