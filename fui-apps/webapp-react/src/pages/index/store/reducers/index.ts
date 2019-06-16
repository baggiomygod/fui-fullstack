
import tabReducer from './tabReducer'
import articlesReducer from './articlesReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const mainReducers = combineReducers({
  tabReducer,
  articlesReducer,
  userReducer,
})

export default mainReducers
