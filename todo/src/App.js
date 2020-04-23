import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import reducer, { initialState } from './reducers/reducer';
import TodoForm from './components/TodoForm';

function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	console.log(state);
	return (
		<div className="App">
			<h1>To do list</h1>
			<TodoList todos={state.todos} dispatch={dispatch}/>
			<TodoForm dispatch={dispatch} />
		</div>
	);
}

export default App;
