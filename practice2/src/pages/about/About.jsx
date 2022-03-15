import React from "react";
import './about.css'
import { AboutContent } from "./AboutContent";

 export const About = () => {
return(
	<div className='info-block-about'>

	   <div className='about-title'>
			 <h1>О городе!</h1>
		</div>
		{<AboutContent/>}

</div>
)

};
