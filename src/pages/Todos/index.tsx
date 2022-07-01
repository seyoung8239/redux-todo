import React from 'react';

import TodoList from '../../components/Todos/TodoList';
import TodoAddInput from '../../components/Todos/TodoAddInput';

const Todos = () => {
	return (
		<>
			<h1>Ultimate Todo App</h1>
			<TodoList />
			<TodoAddInput />
		</>
	);
};

export default Todos;
