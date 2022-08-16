import PropTypes from "prop-types";
import styles from "./Detail.module.css";
import {useParams} from "react-router-dom";
import {useState, useEffect, useCallback} from 'react';
function Detail({large_cover_image, title, year, runtime, rating, genres}){
	const [loading, setLoading] = useState(true);
	const [mvdetail, setMvdetail] = useState([]);
	const {id} = useParams();
	const getMovie = useCallback(async()=> {
		const json = await(
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
	setMvdetail(json.data.movie);
	setLoading(false);
	},[id]);
	
	useEffect(() => {
	getMovie();
	},[getMovie]);
	console.log(mvdetail);
	return(
		<div className={styles.container}>
		{loading ? <h1>Loading...</h1> : (
			<div className={styles.box}>
				<img src={mvdetail.large_cover_image} alt={title}/>
				<div className={styles.para}>
				<h2>{mvdetail.title}</h2>
				<span>{mvdetail.year}년 / </span>
		<span>{mvdetail.runtime}분</span>
		<p>평점 : {mvdetail.rating}</p>
		<p>장르 :</p>
		<ul>
		{mvdetail.genres.map((g) => (<li key={g}>{g}</li>
		))}
		</ul>
		<p>{mvdetail.description_full}</p>
			</div>
			</div>
			)}
		</div>
	)
}

Detail.propTypes = {
	large_cover_image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	runtime: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	genres: PropTypes.string.isRequired,
};

export default Detail;