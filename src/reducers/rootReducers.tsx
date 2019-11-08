import { combineReducers } from 'redux';
import dictionariesReducer from './dictionaries.reducer';
import rowsReducer from './rows.reducer';

const rootReducer = combineReducers({
  dictionariesReducer,
  rowsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
