import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './FeaturedRooms.css';
import Room from '../Room/Room';


const FeaturedRooms = ({ rooms }) => {
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

const mapStateToProps = state => ({
    rooms: state.rooms.sortedRooms
});

export default connect(mapStateToProps)(FeaturedRooms);