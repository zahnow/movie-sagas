import './MovieDetails.css';
import { useHistory, useParams, Link } from 'react-router-dom';
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
            <div className='title-bar'>
                <button onClick={handleBackButton}><i class="fa-solid fa-angle-left"></i> Back</button>
                <h1>{movie?.title}</h1>
            </div>
            <div className='details-container-grid'>
                <div>
                    <img src={movie?.poster} />
                </div>
                <div>
                    <ul>
                        {movie?.genre.map(genre => <li key={genre.id}><Link to={`/genres/${genre.id}`}>{genre.name}</Link></li>)}
                    </ul>
                    <p>{movie?.description}</p>
                </div>
            </div>
        </div >
    );
}

export default MovieDetails;