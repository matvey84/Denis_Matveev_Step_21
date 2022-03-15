import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { useParams } from "react-router-dom";
import SimilarResults from "../components/similarList/SimilarResults";
import { getFetchForDetailsInfo, getFavoriteMovieIdFromDetailsPage,
	      getCastInfoAboutSelectedMovie, getFavoriteMovieId } from "../redux/actionsTypes";
import { /*getSimilarResults,*/showAlert} from "../redux/actionsTypes";
import { Loader } from "../components/loader/Loader";

export default function DetailPages(){
	const dispatch = useDispatch()
	const detailsData = useSelector(state=>state.fetchRedusers.detailsData)
	const castData = useSelector(state=>state.fetchRedusers.castData)
	const favoriteMovieArr = useSelector(state=>state.fetchRedusers.favoriteMovieArr)
	const similarResultsData = useSelector(state=>state.fetchRedusers.similarResultsData)
	const data = useSelector(state=>state.fetchRedusers.data)
	const [disable, setDisable] = useState()
	const {id,type} = useParams()
		 console.log(castData.cast.map((item,i)=>item))

	const sendFavorMovieIdFromDetailPage = (e,id)=>{
		setDisable(true)
		dispatch(getFavoriteMovieIdFromDetailsPage(detailsData))
		const favorite = data.results.filter((item,i) => item.id===detailsData.id)
		dispatch(getFavoriteMovieId(...favorite))
		const text = 'This movie has already been added to the list of favorites!'
		favoriteMovieArr.some(item =>item.id===e.target.id)&&dispatch(showAlert(text))
	}
	

	//send imdbIDto Fetch
	useEffect(()=>{
		
		dispatch(getFetchForDetailsInfo({id,type}))
		dispatch(getCastInfoAboutSelectedMovie({id,type}))
	},[dispatch, id, type])

	useEffect(()=>{
		localStorage.setItem('SimilaryResult', JSON.stringify(similarResultsData))
	 } ,[similarResultsData])
	 
	
//upload data
  // useEffect(()=>{
	// 	dispatch(getSimilarResults(detailsData.Title))
  // },[detailsData.Title, dispatch])

	return(
	
	<div className =" details-container mb-3">
		<div className ="row g-0">
			<div className ="poster col-md-4">
				<img 
					src={`https://image.tmdb.org/t/p/original${detailsData.poster_path}`}
					className="img-fluid rounded-start poster" 
					alt={detailsData.Title}
					onError={(e) => (e.currentTarget.src = "https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg")}
				/>
		    <button
				disabled={disable} 
				onClick={(e)=>sendFavorMovieIdFromDetailPage(e)}
				id={id}
				className="btn favor btn-success">
					Add to favorite 
			  </button>
			</div>
			<div className ="col-md-8 total-info">
				<div className ="tech-info">
					<h2 className ="details-title">
						{detailsData.original_title || detailsData.original_name}, {type}
					</h2>
					<span className="info type">
						{detailsData.media_type}
					</span>
					<span className="info relisaed">
						Relisaed:  {detailsData.release_date || detailsData.first_air_date}
					</span>
					<span className="info country">
						Country:  {detailsData.production_countries.map((item,)=>item.name).join(', ')}
					</span>
					<span className="info director">
						Director:  {castData.crew.filter((item,i)=>item.job==='Director').map(name=>name.original_name)}
					</span>
					<span className="info genre">
						Genre:  {detailsData.genres.map((item,)=>item.name).join(', ')}
					</span>
					<span className="info production-company">
						Production Companies:  {detailsData.production_companies.map((item,)=>item.name).join(', ')}
					</span>
					<span className="info runtime">
						Runtime:  {detailsData.runtime||'xxxx'} min.
					</span>
					<span className="info actors">
						Actors:  {castData.cast.map((item,i)=>item.name).splice(0,10).join(', ')}, ...
					</span>
					<span className="info boxoffice">
						BoxOffice:  {detailsData.BoxOffice||'xxxxx'}
					</span>
					<span className="info rating">
						<strong>Roten Tomatos Rating:  {detailsData.vote_average||'xxxxx'}</strong>
					</span>
				</div>
			</div>
		</div>
		<div className="description">
					<span className="info plot">
						{detailsData.overview}
					</span>
		</div>
		{similarResultsData.results ? <SimilarResults similarResultsData={similarResultsData}/> : <Loader/>}
	</div>
	)
}
