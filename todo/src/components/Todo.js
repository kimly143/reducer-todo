import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FromNow from './FromNow';


export default function Todo(props) {
	return (
		<div>
			<Checkbox
				checked={props.completed}
				color="primary"
				inputProps={{ 'aria-label': 'secondary checkbox' }}
				onChange={() => {
					// dispatch is a fn take an object
					props.dispatch({ type: 'TOGGLE_COMPLETE', id: props.id });
				}}
			/>
            {props.item}
            <FromNow date={props.completedAt} style={{color: 'cyan', opacity: '0.7'}}/>
		</div>
	);
}
