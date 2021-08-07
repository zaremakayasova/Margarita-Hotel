import { connect } from 'react-redux';
import './RoomsFilter.css';
import { filterRoomTypes, filterRoomCapacity, filterPriceRange } from '../../redux/rooms/rooms.actions.js';


const RoomsFilter = ({ filterRoomTypes, filterRoomCapacity, filterPriceRange, price, breakfast, pets }) => {
    const handleRoomTypes = e => {
        filterRoomTypes(e.target.value);
    };

    const handleRoomCapacity = e => {
        filterRoomCapacity(parseInt(e.target.value));
    };

    const handlePriceRange = e => {
        filterPriceRange(parseInt(e.target.value));
    };

    return (
        <div className='rooms-filter'>
            <h1>Search Rooms</h1>
            <div className='type-filter'>
                <label htmlFor='type-filter'>Room Type</label>
                <select id='type-filter' onChange={handleRoomTypes}>
                    <option value='all'>all</option>
                    <option value='single'>single</option>
                    <option value='double'>double</option>
                    <option value='family'>family</option>
                    <option value='presidential'>presidential</option>
                </select>
            </div>
            <div className='guests-filter'>
                <label htmlFor='guests-filter'>Guests</label>
                <select id='guests-filter' onChange={handleRoomCapacity} >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='10'>10</option>
                </select>
            </div>
            <div className='price-filter'>
                <label htmlFor='price-filter'>Room Price</label>
                <input type='range' id='price-filter' min='100' max='600' defaultValue='600' step='1' onChange={handlePriceRange} />
                <span>$ {price}</span>
            </div>
            <div className='size-filter'>
                <label htmlFor='size-filter'>Room Size</label>
                <input type='number' id='size-filter' min='100' max='600' defaultValue='600' step='1' onChange={handlePriceRange} />
            </div>
            <div className='pets-breakfast'>
                <label htmlFor='breakfast'>Breakfast</label>
                <input type='checkbox' id='breakfast' checke={breakfast} onChange={handleRoomTypes} />
                <label htmlFor='pets'>Pets</label>
                <input type='checkbox' id='pets' checked={pets} onChange={handleRoomTypes} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    price: state.rooms.price,
    breakfast: state.rooms.breakfast,
    pets: state.rooms.pets
});

const mapDispatchToProps = dispatch => ({
    filterRoomTypes: roomType => dispatch(filterRoomTypes(roomType)),
    filterRoomCapacity: roomCapacity => dispatch(filterRoomCapacity(roomCapacity)),
    filterPriceRange: roomPrice => dispatch(filterPriceRange(roomPrice))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomsFilter);