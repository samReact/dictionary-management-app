import { ADD_ROW, DELETE_ROW } from '../actions/types/rows.action.type';

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
    default:
      return state;
  }
};

export default rowsReducer;
