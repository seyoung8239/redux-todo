import React from 'react';
import { fetchTodos } from '../../store/todoSlice';
import { useAppDispatch } from '../../hooks';

import TodoList from '../../components/Todos/TodoList';
import TodoAddInput from '../../components/Todos/TodoAddInput';

const Todos = () => {
	const dispatch = useAppDispatch();
	const handleClickFetchTodo = () => {
		console.log('clicked!');
		dispatch(fetchTodos());
	};

	return (
		<>
			<h1>Redux Todo App</h1>
			<TodoList />
			<TodoAddInput />
			<button onClick={handleClickFetchTodo}>Fetch Todos</button>
		</>
	);
};

export default Todos;
