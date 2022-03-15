import React from "react";
import { InfoFromForm } from "../infoFromForm/InfoFromForm";
//import { AddForm } from "../addForm/AddForm";

export const InfolIst = ({infoUser})=>{

	return(
		
		<>
		{infoUser.map((info, i)=>
			<InfoFromForm info={info} id={i+1} key={i+1}
		/>
			)}
	 </>		

	)
}