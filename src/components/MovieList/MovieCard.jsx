import './MovieCard.css';
import {useHistory} from 'react-router-dom';

function MovieCard( {movie} ) {
    const history = useHistory();

    function handleMovieClick() {
        history.push(`/details/${movie.id}`);
    }
    
    return (
        <div className="movie-card" onClick={handleMovieClick}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    );
}

export default MovieCard;