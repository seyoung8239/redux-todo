import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { removeTodo, toggleTodo } from '../../store/todoSlice';
import Todo from './Todo';

const TodoList = () => {
	const todos = useAppSelector(state => state.todos.todos);
	const dispatch = useAppDispatch();

	/* 
		연습을 위해 Event Delegation형태로 구현헸다. 
		React는 내부적으로 Event Delegation을 사용하므로 
		굳이 이렇게 짤 필요는 없다.
	*/
	const handleTodoListClick: React.MouseEventHandler<
		HTMLInputElement
	> = e => {
		if (e.target instanceof Element) {
			const id = e.target.id;
			console.log(id);

			switch (e.target.className) {
				case 'isDone':
					dispatch(toggleTodo(id));
					break;
				case 'btnDelete':
					dispatch(removeTodo(id));
					break;
			}
		}
	};

	return (
		<div onClick={handleTodoListClick}>
			{todos.map((todo, idx) => (
				<Todo key={todo.id} idx={idx} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
