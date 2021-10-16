import { useSelector } from 'react-redux';
import './RoomsContainer.css';
import Room from '../Room/Room';
import RoomsFilter from '../RoomsFilter/RoomsFilter';


const RoomsContainer = () => {
    const sortedRooms = useSelector(state => state.rooms.sortedRooms);
    if (sortedRooms.length === 0) {
        return (
            <div className='empty-search'>
                <RoomsFilter />
                <h2>Unfortunately no rooms matched your search parameters...</h2>
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

export default RoomsContainer;