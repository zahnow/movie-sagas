import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import './MovieList.css'

function MovieList() {
    const movies = useSelector(store => store.movies);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieCard key={movie.id} movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;