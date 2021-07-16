import './Banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='banner'>
            <h1>Luxurious Rooms</h1>
            {/* <hr /> */}
            <p>Deluxe Rooms Starting At $299</p>
            <Link to='/rooms' className='banner-link'>
                OUR ROOMS
            </Link>
        </div>
    );
};

export default Banner;