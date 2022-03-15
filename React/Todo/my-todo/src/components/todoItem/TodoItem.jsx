import React from "react";
import { useState } from "react";
import './TodoItemStyles.css';





export const TodoItem = ({ todo, id, toggleCheck, deleteTodo, addChangeTodo}) => {
	
	const[isChange, setisChange] = useState(false)// new
	const[changeValue, setChangeValue] = useState('')
	
	
	let todoArrForStorage = JSON.parse(localStorage.getItem('todo')) || [];
  todoArrForStorage.push(todo)
  localStorage.setItem('todo', JSON.stringify(todoArrForStorage))

	const classes = [];
	if(todo.check === true){
		classes.push('check ')//class 'check' has created at TodoItemStyles.css
	  classes.push('isShow ')
	}

  const valueFromInp = (e)=>setChangeValue(e.target.value)

	function  submitChangeForm (e){
		e.preventDefault();
		addChangeTodo(id, changeValue);
		setChangeValue('');
		setisChange(false);
		
	
	}
	
	const changeForm = (
		<div className='change-item'>
			<form className="change-form" onSubmit={submitChangeForm}>
				<input 
					id={todo.id}
					onChange={valueFromInp}
					className="input-for-change"
					type='text'
					value={changeValue||todo.content}
				/> 
				<div className="change-btn-block">
					<button 
					id={todo.id}
					className="addChange-btn"
					onChange={()=> setisChange(true)}
					> Save Change
					</button>
				</div>
			</form>
		</div>
	)

	const todoItem = (
		<div className='todo-item' id={todo.id}>
			<input 
				checked={todo.check}
				onChange={() => toggleCheck(todo.id)} 
				
				type='checkbox'
			/>
				<div className =  'check-todo-text-block' id={todo.id}>
					<div id={todo.id} className= {classes.join('  ' ) + "todo-text"}>
						<span className="num">#{id}.  </span>
						<div className="content">{todo.content}</div>
					</div>
				</div>
		
			<div id={todo.id} className="todo-btn-block">
					<button
						id={Number(todo.id)}
						className="block-bts change"
						onClick={() => setisChange(true)}
					>
							Change
					</button>

					<button
						id={Number(todo.id)} 
						onClick={()=>deleteTodo(todo.id)} 
						className= {classes.join('  ' ) + 'block-bts del'}
					>
							Delete
					</button>
			</div>
		</div>
	)


return(
	<>
	{isChange? changeForm:todoItem}
	</>
	);
}