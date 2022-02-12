import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
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
      </Router>
    </div>
  );
}


export default App;
