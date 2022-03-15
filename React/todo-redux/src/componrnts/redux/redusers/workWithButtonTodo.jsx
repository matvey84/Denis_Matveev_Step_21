import { CHECK, UNCHECK, SHOW_CHANGE_FORM, DELETE_TODO, TOGGLE_CHECK} from "../ActionType"

const defaultState={
	check:false,
}

export const workWithButtonTodo = (state = defaultState, action)=>{

		switch(action.type){
		case 'CHECK':
			return {...state,	check: action.payload? true:false/*true*/}
			
		case 'UNCHECK':
			return {...state,	check:false}

			default:
			return state;
	}

}
