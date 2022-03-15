import React from "react";
import './infoFromForm.css'


export const InfoFromForm = ({children, ...props}) =>{
console.log(props)
console.log(props.info.image)

	return(
		<div className = 'user-info'>
		<h1>User:{props.id}</h1>
		<div className = 'info user-login'>Логин:{props.info.login}</div>
		
		<figure className=" info image-block">
		<div classsName = 'info user-image'>Фото:<img src={props.info.image} alt='foto' width={150} height={150} /></div>
		<figcaption><div className = 'image-content'>{props.info.descript}</div></figcaption>
		</figure>

		<div className = 'info user-passw'>Пароль:{props.info.passw}</div>
		<div className = 'info user-email'>Эл.почта:{props.info.email}</div>
		
		
		</div>


	);
}