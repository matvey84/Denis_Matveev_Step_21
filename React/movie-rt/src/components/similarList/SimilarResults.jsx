import React,{useState,useEffect}from "react";
import { Link,  } from "react-router-dom";
import { useSelector,} from "react-redux";
// import { Loader } from "../loader/Loader";
import {nanoid} from 'nanoid';
// import { getSimilarResults,} from "../redux/actionsTypes";

function SimilarResults ({similarResultsData}){

	const detailsData = useSelector(state=>state.fetchRedusers.detailsData)

	const [filterredRes, setFilterredRes] = useState([])
	const [isOpen,setIsOpen]=useState(false)
	
	useEffect(() => {
		const filterredArr = similarResultsData.results && similarResultsData.results.filter(item=>item.id !== detailsData.id)	
		setFilterredRes(filterredArr)
	},[detailsData.id, similarResultsData.results])
  
	const showHideSimilarResult = ()=>{
		setIsOpen(!isOpen)
	}

	const list =(
    filterredRes.map((item,i)=>
			<Link
				to={`/search/detail/${filterredRes[i].media_type}/${filterredRes[i].id}`} 
				className="list-group-item-link"
				aria-current="true"
				key={nanoid()}
				id ={i}
			>
        <div className="link-title">
				  <div className="similar-movie-info">
						<span className="similar-movie-title">
							{`${filterredRes[i].original_title || filterredRes[i].original_name}, `}
						</span>
						<span className="similar-movie-reliease-date">
							{` ${ filterredRes[i].release_date || filterredRes[i].first_air_date}`}
						</span>
					</div>
					<div className="similar-movie-poster">
						  <img src={`https://image.tmdb.org/t/p/original${filterredRes[i].poster_path}`}
								className="card-img-top" 
								alt={filterredRes[i].original_title || filterredRes[i].original_name}
								onError={(e) => (e.currentTarget.src = "https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg")}
							/>
					</div>
				</div>
			</Link>
		)
	)

	return(
	
	<div className="similary-list-group">
		<h3 className='similar-select' onClick={showHideSimilarResult}>Simillary Results ({similarResultsData.results.length-1})</h3>
		<div className= {`link-wrapper ${isOpen ? 'open' : 'close'}`}>
			{list}
		</div>
	</div>
	)
}
export default SimilarResults


