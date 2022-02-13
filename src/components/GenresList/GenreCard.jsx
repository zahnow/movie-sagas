import './Genre.css';
import {useHistory} from 'react-router-dom';

function GenreCard({genre}) {
    const history = useHistory();

    function handleGenreClick() {
        history.push(`/genres/${genre.id}`)    
    }

    return (
        <div className='genre-card' onClick={handleGenreClick}>
            <h1>{genre.name}</h1>
        </div>
    );
}

export default GenreCard;