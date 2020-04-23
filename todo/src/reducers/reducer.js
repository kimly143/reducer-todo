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
			id: 2
		},
		{
			item: 'Make a mask',
			completed: true,
			id: 3
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
							completed: !todo.completed
						};
					}
					return todo;
				})
			};
		default:
			return state;
	}
}
