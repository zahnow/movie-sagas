import {useHistory, useParams} from 'react-router-dom';

function MovieDetails() {
    const params = useParams();
    const history = useHistory();

    function handleBackButton(event) {
        history.push('/');
    }

    return (
        <div>
            <h1>Details Page</h1>
            <h2>{params.movieId}</h2>
            <button onClick={handleBackButton}>Back</button>
        </div>
    );
}

export default MovieDetails;