import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import reducer, { initialState } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	console.log(state);
	return (
		<Container className="App">
			<Typography component="div" style={{ backgroundColor: '#cfe8fc', width: '50vw', padding: '2vw', margin: '10vh auto', opacity: '0.8'}}>
				<h1>To do list</h1>
				<TodoList todos={state.todos} dispatch={dispatch} />
				<TodoForm dispatch={dispatch} />
			</Typography>
		</Container>
	);
}

export default App;
