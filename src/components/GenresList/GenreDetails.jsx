import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieList/MovieCard';

function GenreDetails() {
    const params = useParams();
    const history = useHistory();
    const genres = useSelector(store => store.genres);
    const genre = genres.find(genre => Number(genre.id) === Number(params.genreId));

    const movies = useSelector(store => store.movies);

    const moviesOfGenre = movies.filter(movie => movie.genre.some(g => genre.id === g.id));

    function handleBackButton(event) {
        //history.push('/genres');
        history.goBack();
    }

    return (
        <div className='genre-container'>
                <button onClick={handleBackButton}><i class="fa-solid fa-angle-left"></i> Back</button>
            <div className='title-bar'>
                <h1>{genre?.name} Movies</h1>
            </div>
            <div className='movies'>
                {moviesOfGenre.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default GenreDetails;