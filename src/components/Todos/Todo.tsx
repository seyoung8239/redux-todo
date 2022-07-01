import React from 'react';
import { TodoType } from '../../types';

type Props = {
	idx: number;
	todo: TodoType;
};

const Todo = ({ idx, todo }: Props) => {
	const { id, content, isDone } = todo;
	return (
		<>
			<div>{idx}</div>
			<div>{content}</div>
			<div id={id} className="isDone">
				{isDone ? 'done' : 'not done'}
			</div>
			<button id={id} className="btnDelete">
				delete
			</button>
		</>
	);
};

export default Todo;
