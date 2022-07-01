import React, { useState, useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/todoSlice';

const TodoAddInput = () => {
	const dispatch = useAppDispatch();

	const [newTodoContent, setNewTodoContent] = useState<string>('');
	const handleInputSubmit = useCallback(
		(event: React.FormEvent) => {
			if (newTodoContent) {
				dispatch(addTodo(newTodoContent));
				setNewTodoContent('');
				event.preventDefault();
			}
		},
		[dispatch, newTodoContent],
	);

	return (
		<>
			<form onSubmit={handleInputSubmit}>
				<input
					value={newTodoContent}
					type="text"
					placeholder="let me know what todo"
					onChange={e => setNewTodoContent(e.target.value)}
				/>
				<button type="submit">Add</button>
			</form>
		</>
	);
};

export default TodoAddInput;
