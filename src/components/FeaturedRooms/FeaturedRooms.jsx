import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './FeaturedRooms.css';
import Room from '../Room/Room';


const FeaturedRooms = () => {
    const rooms = useSelector((state) => state.rooms.sortedRooms);
    const featuredRooms = rooms.filter(room => room.fields.featured);
    return (
        <div className='featured-rooms'>
            <h1>Featured Rooms</h1>
            <hr />
            <div className='featured-rooms-container'>
                {
                    featuredRooms.map(room => (
                        <Room key={room.sys.id} room={room} />
                    ))

                }
            </div>
            <div className='featured-rooms-link'>
                <Link className='featured-button' to='/rooms'>VIEW ALL OFFERS</Link>
            </div>
        </div>
    );
};

export default FeaturedRooms;