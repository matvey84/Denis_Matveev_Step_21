import React from "react";
import { Link } from "react-router-dom";
import './header.css'

export default function Header (){

	return(
		<div className = 'header'>
	    <div className="nav-bar">
		    <div className= 'header-title'>
					<h1> Мой Город</h1>
				</div>
		    <div className='nav-links'>
		      <Link className='link' to="/"> На главную</Link>
		      <Link className='link' to="/About"> О городе</Link>
		      <Link className='link' to="/Attraction">Интересные места</Link>
		      <Link className='link' to="/Images"> Фотографии</Link>
					<Link className='link' to="/*"/>
		    </div>
			</div>
    </div>
	);
}