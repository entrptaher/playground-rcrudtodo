import React from 'react';
import ReactDOM from 'react-dom';
import CalendarBtn from '../../containers/CalendarBtn';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
  		<CalendarBtn />,
  	div);
});


