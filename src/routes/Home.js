import {useState, useEffect} from "react";
import Movie2 from '../components/Movie_Sub.js';
import styles from "./Home.module.css";

function Home(){
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async() => {
		const json = await(
			await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
		)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies()
		
	},[]);
	console.log(movies);
	return(
	<div className={styles.wrap}>
	<h1 className={styles.reco}>오늘의 영화 추천</h1>
	<div className={styles.container}>
		{loading ? <h1>Loading...</h1> : 
			(<div>{movies.map((movie) => 
				<Movie2
					key={movie.id}
					id={movie.id}
					medium_cover_image={movie.medium_cover_image}
					title_long={movie.title_long}
					summary={movie.summary}
					genres={movie.genres}
					/>)}
			 </div>)
		 }
		
	</div>
	</div>
		)
}

export default Home;