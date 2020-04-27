import moment from 'moment';

export const initialState = {
	todos: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 1
		},
		{
			item: 'Learn to sew a mask',
			completed: true,
			id: 2,
			// subtract 2 weeks from current date using moment
			completedAt: moment().subtract(2, 'weeks').toDate()
		},
		{
			item: 'Make a mask',
			completed: true,
			id: 3,
			// subtract 6 days from current date using moment
			completedAt: moment().subtract(6, 'days').toDate()
		},
		{
			item: 'Finish reducers project',
			completed: false,
			id: 4
		}
	]
};

export default function reducer(state, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				todos: [
					...state.todos,
					{
						item: action.item,
						completed: false,
						id: new Date()
					}
				]
			};
		case 'TOGGLE_COMPLETE':
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.id) {
						return {
							...todo,
                            completed: !todo.completed,
                            // if item already complete, we un completed it, we delete the date
							completedAt: todo.completed ? null : new Date()
						};
					}
					return todo;
				})
			};
		case 'CLEAR_COMPLETED':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.completed !== true)
			};
		default:
			return state;
	}
}
