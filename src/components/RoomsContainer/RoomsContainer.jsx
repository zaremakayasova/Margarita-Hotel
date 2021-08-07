import { connect } from 'react-redux';
import './RoomsContainer.css';
import Room from '../Room/Room';
import RoomsFilter from '../RoomsFilter/RoomsFilter';


const RoomsContainer = ({ sortedRooms }) => {
    if (sortedRooms.length === 0) {
        return (
            <div className='empty-search'>
                <h3>Unfortunately no rooms matched your search parameters...</h3>
            </div>
        );
    }
    return (
        <div className='rooms-section'>
            <RoomsFilter />
            <div className='rooms-container'>
                {
                    sortedRooms.map(room => (
                        <Room key={room.sys.id} room={room} />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    sortedRooms: state.rooms.sortedRooms
});

export default connect(mapStateToProps)(RoomsContainer);