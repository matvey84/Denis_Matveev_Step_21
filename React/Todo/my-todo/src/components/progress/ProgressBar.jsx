import React from "react";
import './progressStyle.css';

export default function ProgressBar (props) {

const styles= {
  progressBar: {
    width:'150px',
  },
  progressScale: {
	  visibility:'hidden',
  },
}
  const checkedTodos = props.stateTodo.filter(checkTodo => checkTodo.check === true );

  let step = (parseInt(styles.progressBar.width)/props.stateTodo.length)*checkedTodos.length

	if(props.stateTodo.length ===0 && checkedTodos.length === 0){
    styles.progressScale = 'hidden'

	} else { 

		styles.progressScale = 'visible'
	}
 
  function scale(step=0){
	  let widthCount = 0;
	  return widthCount = (widthCount+step)
  }
  let width = scale(step)


	return(
	<div className="progress-block">

		<div className="total-todo">
			<span className="done-text"> Done:{checkedTodos.length} </span>
		</div>

			<div style={styles.progressBar}className="progress-bar">

				<div className = "progress-scale" 
					style={{
						width:`${width}px`,
					  visibility:`${styles.progressScale}`
				}}>
				</div>

			</div>

		<div className="total-text">
			<span className=""> Total:{props.stateTodo.length} </span>
		</div>

	</div>

		
		
	)
}