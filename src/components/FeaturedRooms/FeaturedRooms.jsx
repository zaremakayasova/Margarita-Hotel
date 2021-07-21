import { connect } from 'react-redux';
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
        </div>
    );
};

const mapStateToProps = state => ({
    rooms: state.rooms.rooms
});

export default connect(mapStateToProps)(FeaturedRooms);