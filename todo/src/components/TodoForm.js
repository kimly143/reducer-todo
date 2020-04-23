import React, { useState } from 'react';

export default function TodoForm(props) {
	const [ newItem, setNewItem ] = useState('');
	return (
		<div>
			<input
				value={newItem}
				onChange={(event) => {
					setNewItem(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					// dispatch is a fn take an object
                    props.dispatch({ type: 'ADD_ITEM', item: newItem });
                    setNewItem("");
				}}
			>
				Add Todo Item
			</button>
		</div>
	);
}
