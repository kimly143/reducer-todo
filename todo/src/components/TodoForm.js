import React, { useState } from 'react';
import { Button } from '@material-ui/core';

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

			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					// dispatch is a fn take an object
					props.dispatch({ type: 'ADD_ITEM', item: newItem });
					setNewItem('');
				}}
			>
				Add Todo Item
			</Button>
		</div>
	);
}
