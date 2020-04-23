import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
	return (
		<div>
			<div>{props.todos.map((todo) => <Todo {...todo} key={todo.id} dispatch={props.dispatch} />)}</div>
			{/* ...todo : spread the object to get itd props 
                when render a loop (map) need a unique key*/}
		</div>
	);
}
