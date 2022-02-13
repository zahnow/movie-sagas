import './MovieDetails.css';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const params = useParams();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const movie = movies.find(movie => Number(movie.id) === Number(params.movieId));

    function handleBackButton(event) {
        history.goBack();
    }

    return (
        <div className='details-container'>
            <div>
                <img src={movie?.poster} />
            </div>
            <div>
                <h1>{movie?.title}</h1>
                <ul>
                    {movie?.genre.map(genre => <li>{genre.name}</li>)}
                </ul>
                <p>{movie?.description}</p>
                <button onClick={handleBackButton}>Back</button>
            </div>
        </div>
    );
}

export default MovieDetails;