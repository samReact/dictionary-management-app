import {
  ADD_ROW,
  DELETE_ROW,
  CLEAR_ROWS,
  INCREMENT_ID,
  DELETE_ROW_WARNING,
  RowsState,
  RowsActionTypes,
} from '../actions/types/rows.action.type';

const initialState: RowsState = {
  id: -1,
  rows: [],
};
const rowsReducer = (state = initialState, action: RowsActionTypes) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        rows: [...state.rows, action.payload],
        id: action.payload.id,
      };
    case DELETE_ROW:
      const rows = state.rows.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        rows,
      };
    case CLEAR_ROWS:
      return {
        ...state,
        rows: [],
      };
    case INCREMENT_ID:
      return {
        ...state,
        id: action.payload.id,
      };
    case DELETE_ROW_WARNING:
      const row = state.rows.filter(el => el.id === action.payload.id);
      const updatedRow = { ...row[0], ...action.payload };
      const filteredRows = state.rows.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        rows: [...filteredRows, updatedRow],
      };
    default:
      return state;
  }
};

export default rowsReducer;
