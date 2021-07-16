import './NavBar.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1><Logo />Margarita <span>Hotel</span></h1>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Rooms</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;