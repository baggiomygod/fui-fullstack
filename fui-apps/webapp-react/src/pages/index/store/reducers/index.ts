
import tabReducer from './tabReducer'
import articlesReducer from './articlesReducer';
import { combineReducers } from 'redux';

const mainReducers = combineReducers({
  tabReducer,
  articlesReducer,
})

export default mainReducers
