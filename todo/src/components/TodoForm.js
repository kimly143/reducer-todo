import React, { useState } from 'react';
import { Button , TextField } from '@material-ui/core';

export default function TodoForm(props) {
    const [ newItem, setNewItem ] = useState('');
    
	return (
		<div>
			<TextField id="outlined-basic" label="New item" variant="outlined" >

				value={newItem}
				onChange={(event) => {
					setNewItem(event.target.value);
				}}
			</TextField>
				<br/>
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
			<Button
				variant="contained"
				color="primary"
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
