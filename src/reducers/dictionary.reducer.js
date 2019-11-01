import { SHOW_ALL } from '../actions/types/dictionary.action.type';

const initialState = {
  test: 'Good !',
};

const dictionaryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
