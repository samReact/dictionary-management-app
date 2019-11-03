import {
  ADD_ROW,
  DELETE_ROW,
  CLEAR_ROWS,
  INCREMENT_ID,
} from '../actions/types/rows.action.type';

const initialState = {
  rows: [],
  id: -1,
};

const rowsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ROW:
      return {
        rows: [...state.rows, payload],
        id: payload.id,
      };
    case DELETE_ROW:
      const rows = state.rows.filter(el => el.id !== payload.id);
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
        id: payload.id,
      };
    default:
      return state;
  }
};

export default rowsReducer;
