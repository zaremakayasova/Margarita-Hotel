import './VacationsPage.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import { Link } from 'react-router-dom';

const VacationsPage = () => {
    return (
        <div className='vacations-page'>
            <div className='vacations-container'>
                <div className='vacations-text'>
                    <h1>Open up your world</h1>
                    <p>At Margarita Hotel, our family of brands is as diverse as we are. From everyday, essential travel to luxury escapes, find a collection of welcoming experiences. For wherever you go. For however you stay.</p>
                    <p>Experience exclusive benefits and earn hotel Rewards points at 6,000+ hotels and resorts worldwide to redeem for Reward Nights, unparalleled experiences and more</p>
                    <Link to='/rooms'>EXPLORE NOW</Link>
                </div>
                <div className='vacations-images'>
                    <div className='img-container'>
                        <img className='img1' src={img1} alt='hotel-rooms' />
                        <img className='img2' src={img2} alt='hotel-rooms' />
                    </div>
                    <img className='img3' src={img3} alt='hotel-rooms' />
                </div>
            </div>
        </div>
    );
};

export default VacationsPage;