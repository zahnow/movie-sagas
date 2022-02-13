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
        <div>
            <h1>Add Movie</h1>
            <div>
                <form>
                    <div>
                        <input placeholder="Title" value={titleInput} onChange={(e)=> setTitleInput(e.target.value)} />
                        <input placeholder="Description" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                        <input placeholder="Poster" value={posterInput} onChange={(e) => setPosterInput(e.target.value)} />
                        <select value={genreInput}  onChange={(e) => setGenreInput(e.target.value)} >
                            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>
                    {/*
                    Was considering trying to allowing adding to multiple genres 
                    <div>
                        {genres.map(genre =>
                            <div key={genre.id}>
                                <input type='checkbox' />
                                <label>{genre.name}</label>
                            </div>)}
                    </div> 
                    */}
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleAddMovie}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddMovie;