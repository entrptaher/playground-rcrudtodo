/* eslint-env mocha */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../../containers/TodoList';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<TodoList />,
		div);
});


