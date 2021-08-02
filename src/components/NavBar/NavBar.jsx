import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../images/logo.svg';

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <h1><Logo />Margarita <span>Hotel</span></h1>
                    </Link>
                    <button
                        type='button'
                        className='nav-btn'
                        onClick={handleToggle}
                    ><FaAlignJustify className='nav-icon' />
                    </button>
                </div>
                <ul className={open ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                    <li>
                        <Link to='/promotions'>Promotions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;