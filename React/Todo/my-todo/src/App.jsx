import React, { useState } from 'react';
import './App.css';
import {TodoForm} from './components/todoForm/TodoForm';
import { TodoList } from './components/todiList/TodoList';

function App() {
	let [stateTodo, setStateTodo] = useState([
		// {id:1, check:false, content:'1111',},
		// {id:2, check:false, content:'2222',},
		// {id:3, check:false, content:'3333',},
	])

	function toggleCheck(id) {
		setStateTodo(
		 stateTodo.map(todo=>{
      if(todo.id === id){
				todo.check = !todo.check;	
		  }
		 	  return todo;
		})
		
	)}
	
	function deleteTodo(id) {
		
		setStateTodo(
			
			stateTodo.filter(delTodo => delTodo.id !== id )
			
		)
	
	}

	function removeTodo (check){
			setStateTodo(
			stateTodo.filter(checkTodo => checkTodo.check === check.check )
		)
	}
		
	function addTodo (content){
		setStateTodo(stateTodo.concat([
				{
					//id: Math.ceil(Math.random()*1000),
					id:'',
					check:false,
					content,
				},
			])
		)
		
	}
	
	function addChangeTodo(id, changeContent){
		const changeList = stateTodo.map(todo=>{
			if(id===todo.id){
				return {...todo, content: changeContent}
			}
			return todo
		});
		setStateTodo(changeList)
	}
	
  return (
    <div className="App">

			<TodoForm 
      stateTodo={stateTodo}
			removeTodo={removeTodo}
			deleteTodo = {deleteTodo}
			addTodo = {addTodo}
			/>
		
				{
					
					stateTodo.length  ?

					<TodoList 
				  addChangeTodo={addChangeTodo}
					stateTodo={stateTodo} 
					deleteTodo={deleteTodo} 
					toggleCheck={toggleCheck}
					/>
					:
					<strong>"Всё выполнено!"</strong>
				}
				
		</div>
  );
}

export default App;
