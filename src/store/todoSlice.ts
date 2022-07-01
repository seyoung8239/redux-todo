import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

let id = 5;

const todoSlice = createSlice({
	name: 'todos',
	initialState: initialTodoState,
	reducers: {
		addTodo: (state: TodoState, action: PayloadAction<TodoContent>) => {
			const newTodo = {
				id: '5',
				content: action.payload,
				isDone: false,
			};
			state.todos?.push(newTodo);
		},
		removeTodo: (state: TodoState, action: PayloadAction<TodoId>) => {
			state?.todos.filter((el: TodoType) => el.id !== action.payload);
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
