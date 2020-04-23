import React from 'react';
import List from '@material-ui/core/List';


import Todo from './Todo';

export default function TodoList(props) {
	return (
		<div>
			<List>{props.todos.map((todo) => <Todo {...todo} key={todo.id} dispatch={props.dispatch} />)}</List>
			{/* ...todo : spread the object to get itd props 
                when render a loop (map) need a unique key*/}
		</div>
	);
}
