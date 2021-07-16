import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
