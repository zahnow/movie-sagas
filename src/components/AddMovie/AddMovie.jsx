import './AddMovie.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddMovie() {
    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [posterInput, setPosterInput] = useState('');
    const [genreInput, setGenreInput] = useState('1');

    function handleCancel() {
        history.goBack();
    }

    function handleAddMovie() {
        if(!titleInput || !descriptionInput || !posterInput) {
            // TODO: Could tell user their form input was invalid, highlight inputs, etc.
            console.log('No title input, exiting function');
            return;
        }
        axios.post('/api/movie', 
            {
                title: titleInput,
                description: descriptionInput,
                poster: posterInput,
                genre_id: genreInput
            })
            .then(response => {
                dispatch({type: 'FETCH_MOVIES'});
                history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    return (
        <div className='add-movie-container'>
            <h1>Add Movie</h1>
            <div>
                <form>
                    <div className='input-grid'>
                        <label for="titleInput">Title</label>
                        <input placeholder="Title" id="titleInput" value={titleInput} onChange={(e)=> setTitleInput(e.target.value)} />
                        <label for="descInput">Description</label>
                        <input placeholder="Description" id='descInput' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                        <label for="posterInput">Poster Path</label>
                        <input placeholder="Poster" id='posterInput' value={posterInput} onChange={(e) => setPosterInput(e.target.value)} />
                        <label for="genreInput">Genre</label>
                        <select value={genreInput} index='genreInput'  onChange={(e) => setGenreInput(e.target.value)} >
                            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>
                    <div className='centered-buttons'>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleAddMovie}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddMovie;