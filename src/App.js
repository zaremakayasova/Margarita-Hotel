import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
