import React from "react";
import { useState } from "react";
import ProgressBar from "../progress/ProgressBar";
import './TodoFormStyle.css';
import { useRef } from "react";

export const TodoForm =({addTodo, removeTodo, stateTodo})=>{
	const textInput = useRef(null);
	const [inputValue, setInputValue] = useState('');
	const [checkValue, setChekValue] = useState({check:false,})
	const [todo, value] =useState()
	function  submitForm (e){
		e.preventDefault();
		addTodo(inputValue)
  	setInputValue('');
		localStorage.setItem('todo', JSON.stringify([{value}]))
	}

  function removeAllCheckTodo(e) {
    if(e.target.className === "remove-btn"){
		  removeTodo(checkValue)
	  }
  }	

	function inputFocus() {
		textInput.current.focus();
	}

	return(
		
  <div className="todo-form">
		<h2>TODOLIST</h2>
		<form className="submit-form"  onSubmit={submitForm}>
			<input
			    ref={textInput} 
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					className="main-input"
					type="text" name='mainText'
					placeholder="Add your todo"
			/>
			<button 
			  onClick = {inputFocus} 
				className="main-btn"
				type="submit">
					Add TODO
			</button>
		</form>

	    <div className="progress-and-remove-block">
			   <ProgressBar stateTodo={stateTodo}/>
		    <button onClick={removeAllCheckTodo} className="remove-btn">Remove</button>
      </div>
  </div>
	
	

	)
}