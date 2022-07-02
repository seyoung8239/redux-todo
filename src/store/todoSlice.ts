import {
	createAsyncThunk,
	createSlice,
	nanoid,
	PayloadAction,
} from '@reduxjs/toolkit';
import { TodoType, TodoState } from '../types/todos';

const initialTodoState = {
	todos: [{ id: '0', content: 'add your own todo!', isDone: false }],
	status: 'idle',
	error: null,
} as TodoState;

type TodoId = string;

const getNewId = () => {
	const newId =
		new Date().getTime().toString() + Math.floor(Math.random() * 1000);
	return newId;
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
	console.log('adsf');
	fetch('mock/todos');
	const res = await fetch('mock/todos');
	return res.json();
});

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
	/* 
		fetch 부분만 더미서버와 연동되어 처리
	*/
	extraReducers(builder) {
		builder
			.addCase(fetchTodos.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.todos = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message as string;
			});
	},
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
