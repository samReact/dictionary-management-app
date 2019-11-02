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
      const raw = state.rows.filter(el => el.id !== payload.id);
      console.log(raw);
      return {
        ...state,
        rows: raw,
      };
    default:
      return state;
  }
};

export default rowsReducer;
