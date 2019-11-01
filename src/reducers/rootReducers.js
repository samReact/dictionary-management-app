import { combineReducers } from 'redux';
import dictionaryReducer from './dictionary.reducer';

const rootReducer = combineReducers({
  dictionaryReducer,
});

export default rootReducer;
