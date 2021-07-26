import './Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-social'>
                <h2>SOCIAL MEDIA</h2>
                <div className='footer-icons'>
                    <span><FaFacebookSquare color='#4267B2' /></span>
                    <span><FaTwitterSquare color='#00acee' /></span>
                    <span><FaInstagramSquare color='#3f729b' /></span>
                    <span><FaLinkedin color='#0e76a8' /></span>
                </div>
            </div>
            <div className='footer-promotions'>
                <h2>LOYALTY CLUB</h2>
                <p>Enter your email address to receive exclusive promotions</p>
                <form>
                    <input type='email' placeholder='ENTER EMAIL' required />
                    <button>Submit</button>
                </form>
            </div>
            <div className='footer-address'>
                <h2>MARGARITA <span>HOTEL</span></h2>
                <div>
                    <p>2021 &copy; Margarita Hotel</p>
                    <p>Victoria Street, Roseau, Dominica | +1 767-448-5000 | info@margaritahotels.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;