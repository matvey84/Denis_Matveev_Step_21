import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Attraction} from "../../pages/attraction/Attraction";
import {Images} from '../../pages/image/Images';
import { NotFoundPage } from "../../pages/errorPage/NotFoundPage";
	

export const AppRoutes = ()=>{
return(
<Routes>
	<Route path='/' index element={<Home/>}/>
	<Route path='/About' element={<About/>}/>
	<Route path='/Attraction' element={<Attraction/>}/>
	<Route path='/Images' element={<Images/>}/>
	<Route path='/*' element={<NotFoundPage/>}/>
</Routes>
 );
}