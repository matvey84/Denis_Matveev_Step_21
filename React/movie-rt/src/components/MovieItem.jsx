import React,{useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavoriteMovieId, 
	getFavoriteMovieAfterRemoveDuplicateMovie, showAlert,getSimilarResults } from "../redux/actionsTypes";


export const MovieItem=(props)=>{
	const {id} = props
	const data = useSelector(state=>state.fetchRedusers.data)
	const favoriteMovieArr = useSelector(state=>state.fetchRedusers.favoriteMovieArr)
	const [disable, setDisable] = useState()
	const dispatch = useDispatch()
	
	const sendFavorMovieId = (e,title) => {
	  const favorite = data.results.filter((item,i) => i===id)
	  setDisable(true)
		disableButton(e)
		dispatch(getFavoriteMovieId(...favorite))	
	}
	

	const disableButton = (e)=>{//disabled button if Movie has in favoriteMovieArr
		const text = 'This movie has already been added to the list of favorites!'
		favoriteMovieArr.some(item =>item.id===e.target.id)&&dispatch(showAlert(text))
	}

	useEffect(()=>{
		let filterArr=[]
		favoriteMovieArr.filter(item =>!filterArr.some(el => el.id===item.id)&&filterArr.push(item))
		dispatch(getFavoriteMovieAfterRemoveDuplicateMovie(filterArr))
		localStorage.setItem('FavoriteMovie', JSON.stringify(filterArr))
	},[dispatch, favoriteMovieArr])

	return(
		<div className="card" id={id}>
			<div className="card-body">
				<div className="title-block">
					<h5 className="card-title">{data.results[id].original_title || data.results[id].original_name}</h5>
					<p className="card-text">{data.results[id].release_date || data.results[id].first_air_date}</p>
					<p className="card-type">{data.results[id].media_type}</p>
				</div>
			
				<div className="card-poster">
				  <img src={`https://image.tmdb.org/t/p/original${data.results[id].poster_path}`}
					  className="card-img-top" 
					  alt={data.results[id].original_title}
					  onError={(e) => (e.currentTarget.src = "https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg")}
					/>
				</div>
			</div>
			<div className="item-button-block">
			<Link to={`/search/detail/${data.results[id].media_type}/${data.results[id].id}`}>
				<button
				onClick={()=>dispatch(getSimilarResults(data.results[id].original_title||data.results[id].original_name))}
				 className="btn btn-primary"> Details </button>
			</Link>
				<button 
					id={data.results[id].id}
					onClick = {(e)=>sendFavorMovieId(e)}
					disabled={disable}
					className="btn favor btn-success">
						<div
							id={data.results[id].id}
							className="fav-btn-decor">
								<span className="fav-btn-text">Add to favor</span>
								<span className="heart">  &#9825;</span>
						</div>
				</button>
			</div>
		</div>
	)
}