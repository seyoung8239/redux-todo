import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TodoType, TodoState } from '../types';

const initialTodoState = {
	todos: [
		{ id: '0', content: 'meet yena', isDone: false },
		{ id: '1', content: 'meet yena', isDone: false },
		{ id: '2', content: 'meet yena', isDone: false },
		{ id: '3', content: 'meet yena', isDone: false },
		{ id: '4', content: 'meet yena', isDone: false },
	],
} as TodoState;

type TodoId = string;
type TodoContent = string;

const getNewId = () => {
	const newId = new Date().getTime().toString() + Math.floor(Math.random() * 1000);
	return newId;
};

const todoSlice = createSlice({
	name: 'todos',
	initialState: initialTodoState,
	reducers: {
		addTodo: {
			reducer: (state: TodoState, action: PayloadAction<TodoType>) => {
				state.todos.push(action.payload);
			},
			prepare: (content: string) => {
				return {
					payload: {
						// id: nanoid(),
						id: getNewId(),
						content: content,
						isDone: false,
					},
				};
			},
		},
		removeTodo: (state: TodoState, action: PayloadAction<TodoId>) => {
			const newTodos = state.todos?.filter(
				(el: TodoType) => el.id !== action.payload,
			);
			state.todos = newTodos;
		},
		toggleTodo: (state: TodoState, action: PayloadAction<TodoId>) => {
			const targetTodo = state.todos?.find(
				(el: TodoType) => el.id === action.payload,
			);
			if (targetTodo) {
				targetTodo.isDone = !targetTodo.isDone;
			}
		},
	},
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
