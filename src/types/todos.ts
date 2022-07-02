export interface TodoType {
	id: string;
	content: string;
	isDone: boolean;
}

export interface TodoState {
	todos: TodoType[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}
