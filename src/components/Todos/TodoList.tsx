import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Todo from './Todo';

const TodoList = () => {
	const todos = useAppSelector(state => state.todos.todos);
	const dispatch = useAppDispatch();
	return (
		<>
			{todos.map((todo, idx) => (
				<Todo idx={idx} todo={todo} />
			))}
		</>
	);
};

export default TodoList;
