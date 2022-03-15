import React from "react";
import './home.css'

export const Home = () => {
const mainImg = <img src='https://museumhm.by/wp-content/uploads/2018/11/mogilev-history-112.jpg' width='1000' height='800' alt='Могилев'/>
return(
	<div className='main-info'>
	<h1>Главная!</h1>
	{mainImg}
	</div>


)

};