import React from "react";
import './image.css'
import { ImageItems } from "./ImageItems";


export const Images = () => {
	const imgArr = [
		'https://traveling.by/files/images/2020/07/0429c400f3d68fe71e1d3032cc04e7d8-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/14173743265463c53cd66729fdbafb69-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/7bdd71d8f245cf1744ef662563dc81c7-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/8a65852d549199c94c6559e9ed0626d1-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/43059b9427ff6bf2dc005a8ca27a5800-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/1149490c7983b2954dec6eef6a610785-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/f44ba62fc97a0f7a0a9d47f9b156cd7e-thumb-1260x0-w.jpg',
		'https://traveling.by/files/images/2020/07/562fbc7840ed6356c56abdc4ac33e6c6-thumb-1260x0-w.jpg',
	]
return(
	
	
	<div className='image-list'>
		<div>
	  <h1>Фотографии!!!</h1>
    </div>
	
		<ImageItems imgArr={imgArr}/>

	</div>

)

};