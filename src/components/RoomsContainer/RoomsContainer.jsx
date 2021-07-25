import { connect } from 'react-redux';
import './RoomsContainer.css';
import Room from '../Room/Room';
import RoomsFilter from '../RoomsFilter/RoomsFilter';


const RoomsContainer = ({ rooms }) => {
    return (
        <div className='rooms-container'>
            <RoomsFilter />
            {
                rooms.map(room => (
                    <Room key={room.sys.id} room={room} />
                ))
            }
        </div>
    );
};

const mapStateToProps = state => ({
    rooms: state.rooms.rooms
});

export default connect(mapStateToProps)(RoomsContainer);