import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({ title, text, url, urlText }) => {
    return (
        <div className='banner'>
            <h1>{title}</h1>
            {text ? (
                <p>{text}</p>
            ) : (<hr />)}
            <Link to={url} className='banner-link'>
                {urlText}
            </Link>
        </div>
    );
};

export default Banner;