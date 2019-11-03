import { ADD_ROW, DELETE_ROW, CLEAR_ROWS, INCREMENT_ID } from './types/rows.action.type';

export const addRow = payload => ({
  payload,
  type: ADD_ROW,
});

export const deleteRow = payload => ({
  payload,
  type: DELETE_ROW,
});

export const clearRows = () => ({
  type: CLEAR_ROWS,
});

export const incrementId = payload => ({
  payload,
  type: INCREMENT_ID,
});
