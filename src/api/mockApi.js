import { rest, setupWorker } from 'msw';

const dummyTodos = {
	todos: [
		{ id: '0', content: 'add your own todo!', isDone: false },
		{ id: '1', content: 'aasfe', isDone: false },
		{ id: '2', content: 'segodo!', isDone: false },
		{ id: '3', content: 'add your ogasfodo!', isDone: false },
		{ id: '4', content: 'hseg todo!', isDone: false },
		{ id: '5', content: 'add gsewn todo!', isDone: false },
		{ id: '6', content: 'jfdyhwn todo!', isDone: false },
	],
};

export const handlers = [
    rest.get('mock/todos', (req, res, ctx) => {
        return res(
			ctx.status(200),
			ctx.json(dummyTodos),
		);
    })
];

export const worker = setupWorker(...handlers);