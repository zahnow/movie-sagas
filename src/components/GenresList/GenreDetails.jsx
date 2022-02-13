import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import MovieCard from '../MovieList/MovieCard';

function GenreDetails () {
    const params = useParams();
    const history = useHistory();
    const genres = useSelector(store => store.genres);
    const genre = genres.find(genre => Number(genre.id) === Number(params.genreId));

    const movies = useSelector(store => store.movies);
    //const moviesOfGenre = movies.filter(movie => Number(movie.id) === 1);

    const moviesOfGenre = movies.filter(movie => movie.genre.some(g => genre.id === g.id));

    function handleBackButton(event) {
        //history.push('/genres');
        history.goBack();
    }

    return (
        <div>
            <h1>{genre?.name}</h1>
            <div className='movies'>
                {moviesOfGenre.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
            <button onClick={handleBackButton}>Back</button>
        </div>
    );
}

export default GenreDetails;