import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie_Sub.module.css";

function Movie2({id, medium_cover_image, title_long, genres}){
	return (
	<div className={styles.movie}>
			<img className={styles.poster} src={medium_cover_image} alt="" />
			<h2 className={styles.title_long}><Link to={`/movie/${id}`}>{title_long}</Link></h2>
			<ul className={styles.genre}>
				{genres.map((g) => (<li key={g}>{g}</li>
				))}
			</ul>
	</div>
	);
}


Movie2.propTypes = {
	id: PropTypes.number.isRequired,
	medium_cover_image: PropTypes.string.isRequired,
	title_long: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie2;