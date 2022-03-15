import React from "react";

export const ImageItems = ({imgArr}) => {

	

return(
	<div className="image-items-block">{
		imgArr.map( image =>(
			<div key={image} className="image-item">
          <img src={image} alt='foto'/>
			</div>
		))
		}</div>
)

}