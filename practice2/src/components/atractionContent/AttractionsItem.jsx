import React from "react";
import './attractionItem.css';
//import { AttrContent } from "./AttrContent";


export const AttractionItem = ({attrItems})=> {
	
return(

<div className='list-items'>

	{attrItems.map(item =>(
    <div 
		  className = "attraction-items"
      key={item.id}
    >
			<div className = "attr-title">
				<h3>{item.title}</h3>
			</div>
		  <div className = "attr-image">
				{item.image}
			</div>
		  <div className="attr-description">
				{item.content}
			</div>
				
		</div>
  ))}
</div>
)

}
