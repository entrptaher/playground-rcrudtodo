import { combineReducers } from 'redux';
import todoReducer from './todoReducer';


const todoApp = combineReducers({
	todos: todoReducer
	// no need to provid a key/val pair if same names 
});

export default todoApp;