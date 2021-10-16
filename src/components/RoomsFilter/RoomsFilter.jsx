import './RoomsFilter.css';
import { filterRoomTypes, filterRoomCapacity, filterPriceRange, filterMinSize, filterMaxSize, filterBreakfast, filterPets } from '../../redux/rooms/rooms.actions.js';
import { useSelector, useDispatch } from 'react-redux';


const RoomsFilter = () => {
    const price = useSelector((state) => state.rooms.price);
    const minSize = useSelector(state => state.rooms.minSize);
    const maxSize = useSelector(state => state.rooms.maxSize);
    const breakfast = useSelector(state => state.rooms.breakfast);
    const pets = useSelector(state => state.rooms.pets);

    const dispatch = useDispatch();

    const handleRoomTypes = e => dispatch(filterRoomTypes(e.target.value));

    const handleRoomCapacity = e => dispatch(filterRoomCapacity(parseInt(e.target.value)));

    const handlePriceRange = e => dispatch(filterPriceRange(parseInt(e.target.value)));

    const handleMinSize = e => dispatch(filterMinSize(e.target.value));

    const handleMaxSize = e => dispatch(filterMaxSize(e.target.value));

    const handleBreakfast = () => dispatch(filterBreakfast());

    const handlePets = () => dispatch(filterPets());

    return (
        <div className='rooms-filter'>
            <h1>Search Rooms</h1>
            <hr />
            <div className='rooms-filter-container'>
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
                        <option value='11'>11</option>
                    </select>
                </div>
                <div className='price-filter'>
                    <label htmlFor='price-filter'>Room Price</label>
                    <input type='range' id='price-filter' min='100' max='600' defaultValue='600' step='1' onChange={handlePriceRange} />
                    <span>$ {price}</span>
                </div>
                <div className='size-filter'>
                    <label htmlFor='size-filter'>Room Size (sq ft)</label>
                    <input type='number' id='size-filter' value={minSize} onChange={handleMinSize} />
                    <input type='number' id='size-filter' value={maxSize} onChange={handleMaxSize} />
                </div>
                <div className='pets-breakfast'>
                    <div>
                        <input type='checkbox' id='breakfast' checked={breakfast} onChange={handleBreakfast} />
                        <label htmlFor='breakfast' className='breakfast-label'>Breakfast</label>
                    </div>
                    <div>
                        <input type='checkbox' id='pets' checked={pets} onChange={handlePets} />
                        <label htmlFor='pets' className='pets-label'>Pets</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsFilter;