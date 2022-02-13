import './Genre.css';
import {useSelector} from 'react-redux';
import GenreCard from './GenreCard';

function GenresList() {
    const genres = useSelector(store => store.genres);

    return (
        <div>
            <h1>Genres</h1>
            <div className='genre-grid'>
                {genres.map(genre => <GenreCard key={genre.id} genre={genre}/> )}
            </div>
        </div>
    );
}

export default GenresList;