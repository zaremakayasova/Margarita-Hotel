import './Room.css';
import { Link } from 'react-router-dom';

const Room = ({ room: { fields: { name, price, slug, images } } }) => {
    return (
        <div className='room'>
            <div className='room-img-container'>
                <img src={images[0].fields.file.url} alt='room' />
                <div className='room-price'>
                    <p>$ {price}</p>
                    <p>per night</p>
                </div>
            </div>
            <Link to={`/rooms/${slug}`} className='room-link'>
                FEATURES
            </Link>
            <h3>{name}</h3>
        </div>
    );
};

export default Room;