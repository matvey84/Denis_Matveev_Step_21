import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoItem = (props) => {
	const isChecked = useSelector(state =>state.addTodoReduser.check)
	const todos = useSelector(state=>state.addTodoReduser.todos)
	const [isChange, setIsChange] = useState(false)
	const[changeValue, setChangeValue] = useState(props.todo.content)
	const dispatch = useDispatch()

	const toggleCheck=(e)=>{
		dispatch({type:'TOGGLE_CHECK', payload:!isChecked})
		for( let i=0; i< todos.length; i++){
			if(todos[i].id === e.target.id){
				todos[i].check = !todos[i].check
	    }	
		} 
		doneTodo ()
	}

	function doneTodo (){
    const doneTodoArr = todos.filter(checkTodo => checkTodo.check === true)
		dispatch({type:'DONE_TODO', payload:doneTodoArr})
	}

	const doneStyle = [];
	const showDelButton = []
	if(props.todo.check === true){
		doneStyle.push('check ')//class 'check' has created at TodoItemStyles.css
	  showDelButton.push('isShow ')
	}

	const deleteTodo=(id)=> {
	const newTodo = todos.filter(delTodo => delTodo.id !== id )
		dispatch({type:'DELETE_TODO', payload:newTodo})
}


	//  let todoArrForStorage = JSON.parse(localStorage.getItem('todo')) || [];
  //   todoArrForStorage.push(todos)
    // localStorage.setItem('todo', JSON.stringify(todoArrForStorage))
  const valueFromInp = (e)=>setChangeValue(e.target.value)

	function  submitChangeForm (e){
		e.preventDefault();
			const newTodo = {
			 content:changeValue,
       id:props.todo.id,//nanoid(),
			 check: props.todo.check,
		}
		dispatch({type:'ADD_CHANGE_CONTENT', payload:newTodo,})
		setChangeValue('');
		setIsChange(false);	
	}
	
	const changeForm = (
		<div className='change-item'>
				<input 
					id={props.todo.id}
					onChange={valueFromInp}
					className="form-control input-for-change"
					type='text'
					value={changeValue}//hangeValue||todo.content
				/> 
				<div className="change-btn-block">
					<button id={props.todo.id}
					 className="btn btn-info add-change-btn"
					 type="submit"
					 onClick={submitChangeForm}
					>
						 Save
					</button>
				</div>
		</div>
	)

	const todoItem = (
		<div className='todo-item' id={props.id}>
			
			<input 
				checked={props.todo.check}
				onChange={(e) => toggleCheck(e)} 
				id={props.todo.id}
				type='checkbox'
				className= "check-todo-text-block"
			
			/>
				<div className =  'check-todo-text-block' id={props.todo.id}>
					<div id={props.todo.id} className= {doneStyle.join('  ' ) + "form-control todo-text"}>
						<span className="num">#{props.id}.  </span>
						<div className="content">{props.todo.content}</div>
					</div>
				</div>
		
			<div id={props.id} className=" todo-btn-block">
					<button
						id={props.todo.id}
						className="btn btn-success block-bts change"
						onClick={()=>setIsChange(true)}//dispatch({type:'SHOW_CHANGE_FORM', payload:{isChange:true}})}
					>
							Change
					</button>

					<button
						id={props.todo.id} 
						onClick={(e)=>deleteTodo(e.target.id)} 
						className= {showDelButton.join('  ' ) + 'btn btn-warning block-bts del'}
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