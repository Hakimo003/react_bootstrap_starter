import { combineReducers } from 'redux';
import drawerReducer from './DrawerReducer';


const rootReducer = combineReducers({
  etat: drawerReducer,

});

export default rootReducer;
