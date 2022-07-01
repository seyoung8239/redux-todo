import React from 'react';
import { TodoType } from '../../types';

type Props = {
	idx: number;
	todo: TodoType;
};

const Todo = ({ idx, todo }: Props) => {
	const { content, isDone } = todo;
	return (
		<>
			{idx}
			{content}
			{isDone ? <div>done</div> : <div>not done</div>}
		</>
	);
};

export default Todo;
