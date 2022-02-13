import { useEffect } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';
import GenresList from '../GenresList/GenresList'
import GenreDetails from '../GenresList/GenreDetails';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  return (
    <div className="App">
      <Router>        
      <Header />
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:movieId">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/add">
          <AddMovie />
        </Route>
        <Route path='/genres' exact>
          <GenresList />
        </Route>
        <Route path='/genres/:genreId'>
          <GenreDetails />
        </Route>
      </Router>
    </div>
  );
}


export default App;
