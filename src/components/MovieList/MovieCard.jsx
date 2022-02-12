import {Link} from 'react-router-dom';

function MovieCard( {movie} ) {
    return (
        <div className="movie-card" >
            <h3><Link to={`/details/${movie.id}`}>{movie.title}</Link></h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    );
}

export default MovieCard;