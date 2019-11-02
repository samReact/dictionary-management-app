import { ADD_ROW, DELETE_ROW } from './types/rows.action.type';

export const addRow = payload => ({
  payload,
  type: ADD_ROW,
});

export const deleteRow = payload => ({
  payload,
  type: DELETE_ROW,
});
