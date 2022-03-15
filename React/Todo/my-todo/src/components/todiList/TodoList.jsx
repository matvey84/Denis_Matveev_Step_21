import React from "react";
import { TodoItem } from "../todoItem/TodoItem";

export const TodoList=(props)=>{
	
	return(
		<>
			{
				props.stateTodo.map((todo,i)=>{
						return <TodoItem
					  addChangeTodo={props.addChangeTodo}
						todo={todo}
						id={i+1}
						key={todo.id = i+1}
						deleteTodo={props.deleteTodo}
						toggleCheck={props.toggleCheck}
					/>
				})
			}
		</>
	);
}