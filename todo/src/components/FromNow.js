import React from 'react';
import moment from 'moment';
import { blueviolet } from 'color-name';

export default function FromNow(props) {
	if (!props.date) return null;
	const instant = moment(props.date);
	return <span style={{color: blueviolet}}> {instant.fromNow()} </span>;
}
