export const ADD_ROW = 'add.row';
export const DELETE_ROW = 'delete.row';
export const CLEAR_ROWS = 'clear.rows';
export const INCREMENT_ID = 'increment.id';
export const DELETE_ROW_WARNING = 'delete.row.warning';

export interface Row {
  id: number;
  domain: string;
  range: string;
  hasDuplicate: boolean;
}

export interface RowsState {
  id: number;
  rows: Array<Row>;
}

export interface RowId {
  id: number;
}

interface AddRowAction {
  type: typeof ADD_ROW;
  payload: Row;
}

interface DeleteRowAction {
  type: typeof DELETE_ROW;
  payload: RowId;
}

interface ClearRowsAction {
  type: typeof CLEAR_ROWS;
}

interface IncrementIdAction {
  type: typeof INCREMENT_ID;
  payload: RowId;
}

interface DeleteRowWarningAction {
  type: typeof DELETE_ROW_WARNING;
  payload: Row;
}

export type RowsActionTypes =
  | AddRowAction
  | DeleteRowAction
  | ClearRowsAction
  | IncrementIdAction
  | DeleteRowWarningAction;
