export interface TodoType {
	id: string;
	content: string;
	isDone: boolean;
}

export interface TodoState {
	todos: TodoType[];
}
