import React from 'react';
import ReactDOM from 'react-dom';

// Testing...
import { expect } from 'chai';

import todoReducer from '../../reducers/todoReducer';
import TodoList from '../../containers/TodoList';
import { 
	addTodo, 
	removeTodo, 
	toggleTodo 
} from '../../actions/todoActions';

// ====================================


// this may want a Provider to work
describe('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
	  	<TodoList />
  	, div
	);

	it('is ok', () => {
		console.log('yes, you need a test or two here for refs');
	});
});
