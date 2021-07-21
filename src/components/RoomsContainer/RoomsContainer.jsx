import { connect } from 'react-redux';
import './RoomsContainer.css';
import Room from '../Room/Room';


const RoomsContainer = ({ rooms }) => {
    return (
        <div className='rooms-container'>
            {
                rooms.map(room => (
                    <Room key={room.id} room={room} />
                ))
            }
        </div>
    );
};

const mapStateToProps = state => ({
    rooms: state.rooms.rooms
});

export default connect(mapStateToProps)(RoomsContainer);