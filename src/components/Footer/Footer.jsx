import './Footer.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-follow-us'>
                <span>LOYALTY CLUB</span>
                <p>ENTER YOUR EMAIL ADDRESS TO RECEIVE EXCLUSIVE PROMOTIONS</p>
                <form>
                    <input type='email' placeholder='ENTER EMAIL' required />
                    <button>Submit</button>
                </form>
                <span>FOLLOW US</span>
                <div className='social-icons'>
                    <span><FaFacebookSquare /></span>
                    <span><FaTwitterSquare /></span>
                    <span><FaInstagramSquare /></span>
                    <span><FaLinkedin /></span>
                </div>
            </div>
            <div className='footer-address'>
                <h1><Logo />Margarita <span>Hotel</span></h1>
                <div>
                    <p>2021 &copy; Margarita Hotels</p>
                    <p>Victoria Street, Roseau, Dominica | +1 767-448-5000 | info@margaritahotels.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;