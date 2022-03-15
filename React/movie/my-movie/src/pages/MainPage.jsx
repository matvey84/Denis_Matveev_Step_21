import React from "react";
import { useState, useEffect } from "react";
//import SearchForm from "../components/form/SearchForm";
import HeaderMovie from "../components/header/HeaderMovie";
import MovieItemsList from "../components/movieItems/MovieItemsList";
import Paginator from "../components/paginator/Paginator";
import { useParams } from "react-router-dom";
import SearchResult from "./SearchResult";


export default function MainPage(){
	const [url, setUrl] = useState('http://www.omdbapi.com/')
	const [movieItems, setMovieItems] = useState([])
	const [isrResponce, setIsResponce] = useState(false)
	const [storage, setStorage] = useState()
	const [title, setTitle] =useState('')
	const [type, setType] =useState('')
	const [year, setYear] =useState('')
	const [page, setPage] = useState('')

	// const storeDataLocally = movieItems => {
	// 	const dataObj = {
	// 		movieItems
	// 	};
	// 	localStorage.setItem('dataStorage', JSON.stringify(dataObj));
	// };
	
	async function getPropForURL(searchInp, typeInp, inpYear,defPage) {//function to generate a request
		const apiKey = 'f5716cf9';
		let newUrl = new URL(url)
		newUrl.search = `?apikey=${apiKey}&s=${searchInp}&type=${typeInp}&y=${inpYear}&page=${defPage}`
	  const resp = await fetch(newUrl);
		const data = await resp.json();
		console.log(newUrl)		
		  if (resp.ok){
				setTitle(searchInp)
			  setYear(inpYear)
			  setType(typeInp)
			  setMovieItems(data)	
				setIsResponce(true)
				setPage(defPage)
				window.localStorage.setItem('dataStorage', JSON.stringify(data));
			}else{
					
				return setMovieItems(JSON.parse(localStorage.getItem('dataStorage')))	//setMovieItems(JSON.parse(localStorage.getItem('dataStorage')))	
			}
			
		
	}
	console.log(movieItems)
	useEffect(()=>{
		//getPropForURL()
		 
	},[])

	async function getFetchWithButtonPage(pagenum){
		const apiKey = 'f5716cf9';
		let newUrl = new URL(url)
     
		 newUrl.search = `?apikey=${apiKey}&s=${title}&type=${type}&y=${year}&page=${pagenum}`
			const resp = await fetch(newUrl);
			const data = await resp.json();
			if (resp.ok){
				setPage(pagenum)
			  setMovieItems(data)
				setIsResponce(true)
			}else{
						return data	
			}

	}
	useEffect(()=>{
	//getFetchWithButtonPage()
		
 },[])
	
	
	
	return(
    <div className="container">
			
				 <HeaderMovie
					getPropForURL={getPropForURL}
				/> 
			
				{movieItems.length !==0 ?
				  <div className="main">
					
							<MovieItemsList
							data={movieItems}
						/>				
							<Paginator data={movieItems}
							getPropForURL={getPropForURL}
							getFetchWithButtonPage={getFetchWithButtonPage}
						/>
					
				  </div>
				  : 	!isrResponce ? <h1 className='error-choise-text'>Please! Make a choice</h1> : null
		    }
					
				{ movieItems.length!==0 ?
					  <div className="footer">

						</div>
					:
						null
					}
    
		</div>

		
	)


	
}