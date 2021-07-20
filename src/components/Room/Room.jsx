import './Room.css';
import { Link } from 'react-router-dom';

const Room = ({ room: { fields: { name, price, images } } }) => {
    return (
        <div className='room'>
            <div className='room-img-container'>
                <img src={images[0].fields.file.url} alt='room' />
                <div className='room-price'>
                    <p>$ {price}</p>
                    <p>per night</p>
                </div>
            <Link to='/' className='room-link'>
                FEATURES
            </Link>
            </div>
            <h3>{name}</h3>
        </div>
    );
};

export default Room;