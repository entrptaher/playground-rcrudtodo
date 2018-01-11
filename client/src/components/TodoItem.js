import React from 'react';
import { Col, Form, Row, } from 'react-bootstrap';
import PropTypes from 'prop-types';

// ============ COMPONENTS ============ 
import Checkbox from '../containers/Checkbox';
import PriorityRadio from '../containers/PriorityRadio';
import CalendarBtn from '../containers/CalendarBtn';
import DeleteBtn from '../containers/DeleteBtn';
// import EditButton from '../containers/EditButton';
    
// ============== STYLING

const centered = {
	padding: 0,
	marginBottom: 5,	
};

	// ================== The Component ==================

const TodoItem = (props) => {

	let item = props.item;
	let oldTask = item.task;
	let _task;

	// ================== Event Styling ==================

	const styleTask = {
		paddingBottom: 10,
		// backgroundColor: item.complete ? 'whitesmoke' : 'white', 
		color: item.complete ? 'lightgrey' : 'black',
		textDecoration: item.complete ? 'line-through' : 'none',
	};

	// Code is WET

	const onFocusStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = 'whitesmoke';
		_task.style.color = 'blue';
		_task.setSelectionRange(0, _task.value.length);
	};

	const onBlurStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = 'white';
		_task.style.color = 'black';
	};

	// ================== Event Functions ==================

	const validateEditable = (event) => {
		event.preventDefault();

		if(item.complete === true) {
			return alert('To Edit, uncheck task completed checkbox');
		}
		// return console.log('Would you like to edit this item')
	};

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = _task.value;
			
		if (newTask === oldTask) {
			return _task.style.backgroundColor = 'white';
		}

		_task.style.backgroundColor = 'white';
		return props.updateTodo(item.id, newTask);
	};

	return (

		<Row  >

			<Col 
				className= 'checkBox' 
				sm= { 1 } 
			>
			
				<Checkbox
					toggleTodo= { props.toggleTodo }   
					id= { item._id }
					complete= { item.complete }
				/>
			
			</Col >

			<Col 
				className= 'priorityRadio' 
				sm= { 1 } 
				style={ centered } 
			
			>
			
				<PriorityRadio
					updateRank= { props.updateRank }   
					id= { item._id }
					currRank = { item.rank }
				/>
			
			</Col >

			<Col 
				className= 'calendarBtn' 
				sm= { 2 } 
				style={{ padding:0,fontSize:'0.75em' }} 
			>
			
				<CalendarBtn
					updateDate= { props.updateDate }   
					id= { item._id }
					currDate = { item.date }
				/>	
			
			</Col >

			<Col 
				className= 'currentTask' 
				sm={ 6 } 
			>

				<Form 
					onClick= { validateEditable }
					onChange= { handleTaskEdit } 
					onFocus= { onFocusStyle } 
					onBlur= { onBlurStyle } 
				>

					<input 
						ref= { (input) => _task = input } 
						type = 'text'  
						defaultValue= { item.task }
						size= { 60 } 
						style= { styleTask } 
					/> 

				</Form>

			</Col>

			<Col className= 'spaceHolder' sm= { 1 } >
			</Col>
			
			<Col 
				className= 'deleteBtn' 
				sm= { 1 } 
				style= { centered } 
			>

				<DeleteBtn 
					removeTodo= { props.removeTodo }   
					id= { item._id } 
				/>

			</Col>

		</Row>
	);
}; // end Component

//===========================================================

TodoItem.propTypes = { 
	item: PropTypes.object.isRequired,
	removeTodo: PropTypes.func,
	toggleTodo: PropTypes.func,
	updateDate: PropTypes.func,
	updateRank: PropTypes.func,
	updateTodo: PropTypes.func,
};

TodoItem.defaultProps ={
	item: { 
		id: '0.3HxYz',
		complete: false,
		details: "needed",
		date: '2020-01-01',
		owner: 'Bhudah',
		task: 'Celebrate life!',
		rank: 'Low', 
	},
	removeTodo: f=>f,
	toggleTodo: f=>f,
	updateDate: f=>f,
	updateRank: f=>f,
	updateTodo: f=>f,
};

export default TodoItem;
