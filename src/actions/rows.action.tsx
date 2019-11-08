import {
  ADD_ROW,
  DELETE_ROW,
  CLEAR_ROWS,
  INCREMENT_ID,
  DELETE_ROW_WARNING,
  Row,
  RowId,
  RowsActionTypes,
} from './types/rows.action.type';

export const addRow = (payload: Row): RowsActionTypes => ({
  payload,
  type: ADD_ROW,
});

export const deleteRow = (payload: RowId): RowsActionTypes => ({
  payload,
  type: DELETE_ROW,
});

export const clearRows = (): RowsActionTypes => ({
  type: CLEAR_ROWS,
});

export const incrementId = (payload: RowId): RowsActionTypes => ({
  payload,
  type: INCREMENT_ID,
});

export const deleteRowWarning = (payload: Row): RowsActionTypes => ({
  payload,
  type: DELETE_ROW_WARNING,
});
