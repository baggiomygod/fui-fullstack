
import tabReducer from './tabReducer'
import articlesReducer from './articlesReducer';
import userReducer from './userReducer';
import todosReducer from './todolistReducer';

import { combineReducers } from 'redux';

const mainReducers = combineReducers({
  tabReducer,
  articlesReducer,
  userReducer,
  todosReducer,
})

export default mainReducers
