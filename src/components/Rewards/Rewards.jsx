import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Rewards.css';
import img1 from '../../images/rewards1.png';
import img2 from '../../images/rewards2.png';
import img3 from '../../images/rewards3.png';
import { FaHandHoldingHeart, FaWifi, FaRegHeart } from "react-icons/fa";
import { RiMoneyDollarCircleLine, RiStarSmileLine, RiCalendarCheckLine } from 'react-icons/ri';


const Rewards = () => {
    const match = useRouteMatch();
    return (
        <div className='rewards'>
            <div className='slide-container'>
                <Slide>
                    <div className='each-slide'>
                        <div style={{ 'backgroundImage': `url(${img1})` }}>
                            <span>Margarita Hotel</span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div style={{ 'backgroundImage': `url(${img2})` }}>
                            <span>Margarita Hotel</span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div style={{ 'backgroundImage': `url(${img3})` }}>
                            <span>Margarita Hotel</span>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='rewards-text'>
                <h1>Margarita Hotel<sup>&reg;</sup> Rewards members experience more</h1>
                <ul>
                    <li><span><RiMoneyDollarCircleLine /></span>Access to our LOWEST RATES, exclusive to members only</li>
                    <li><span><RiStarSmileLine /></span>Earn points on every stay at 6,000+ destinations</li>
                    <li><span><FaHandHoldingHeart /></span>Redeem points for free nights</li>
                    <li><span><RiCalendarCheckLine /></span>Stay when you want, with no blackout dates on free nights</li>
                    <li><span><FaWifi /></span>Free WIFI every time</li>
                    <li><span><FaRegHeart /></span>Plus other exclusive Elite benefits</li>
                </ul>
                <Link className='rewards-link' to={`${match.path}/enrollment`}>JOIN NOW</Link>
            </div>
        </div>
    );
};

export default Rewards;