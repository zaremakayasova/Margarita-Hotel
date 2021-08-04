import './Points.css';
import { FaRegStar, FaBed, FaMedal } from 'react-icons/fa';

const Points = () => {
    return (
        <div className='points'>
            <div className='points-container'>
                <p><span><FaRegStar /></span> Earn points everywhere</p>
                <ul>
                    <li>5,600+ hotels &amp; resorts worldwide</li>
                    <li>Earn points with our travel partners</li>
                </ul>
            </div>
            <div className='points-container'>
                <p><span><FaBed /></span> Use your points</p>
                <ul>
                    <li>Rewards Nights with no blackout dates</li>
                    <li>Convert points to airline credits</li>
                </ul>
            </div>
            <div className='points-container'>
                <p><span><FaMedal /></span> Go for gold</p>
                <ul>
                    <li>Gold Elite status after 10 stays</li>
                    <li>Priority check-in &amp; extended check-out</li>
                </ul>
            </div>
        </div>
    );
};

export default Points;