import React from 'react';
import moment from 'moment';

export default function FromNow(props) {
	if (!props.date) return null;
	const instant = moment(props.date);
	return <span style={{color: '#3f51b5'}}> <em> Done: {instant.fromNow()} </em></span>;
}
