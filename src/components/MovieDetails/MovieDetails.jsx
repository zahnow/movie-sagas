import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function MovieDetails() {
    const params = useParams();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const movie = movies.find(movie => Number(movie.id) === Number(params.movieId));

    function handleBackButton(event) {
        history.push('/');
    }

    return (
        <div>
            <h1>{movie?.title}</h1>
            <ul>
                {movie?.genre.map(genre => <li>{genre.name}</li>)}
            </ul>
            <img src={movie?.poster}/>
            <p>{movie?.description}</p>
            <button onClick={handleBackButton}>Back</button>
        </div>
    );
}

export default MovieDetails;