import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import SingleRoomPage from './pages/SingleRoomPage/SingleRoomPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/rooms'><RoomsPage /></Route>
          <Route exact path='/rooms/:slug'><SingleRoomPage /></Route>
          <Route path='*'><ErrorPage url='/' text={'Page Not Found'} urlText='RETURN HOME' /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
