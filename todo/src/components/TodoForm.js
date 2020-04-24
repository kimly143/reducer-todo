import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export default function TodoForm(props) {
	const [ newItem, setNewItem ] = useState('');

	return (
		<div>
			<TextField id="standard-basic" label="New item"
				value={newItem}
				onChange={(event) => {
					setNewItem(event.target.value);
					// console.log(newItem);
				}}
			/>
			<Button
				style={{ margin: '2vh' }}
				variant="contained"
				color="primary"
				onClick={() => {
					// dispatch is a fn take an object
					props.dispatch({ type: 'ADD_ITEM', item: newItem });

					setNewItem('');
				}}
			>
				Add Todo Item
			</Button> <br/>
			<Button
				style={{ margin: '1vh auto 2vh auto' }}
				variant="contained"
				color="secondary"
				onClick={() => {
					// dispatch is a fn take an object
					props.dispatch({ type: 'CLEAR_COMPLETED', id: props.id });
				}}
			>
				Clear Completed Item(s)
			</Button>
		</div>
	);
}
