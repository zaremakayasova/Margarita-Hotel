import RoomsActionTypes from './rooms.types';
import roomsData from './data';

const INITIAL_STATE = {
    rooms: roomsData,
    sortedRooms: roomsData,
    type: 'all',
    capacity: 1,
    price: 600,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 1000,
    breakfast: false,
    pets: false
};

const filterRooms = (rooms, type, capacity, price, minSize, maxSize, breakfast, pets) => {

    let tempRooms = [...rooms];
    // filter by type
    if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.fields.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.fields.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.fields.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
        room => room.fields.size >= minSize && room.fields.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
        tempRooms = tempRooms.filter(room => room.fields.breakfast === true);
    }
    //filter by pets
    if (pets) {
        tempRooms = tempRooms.filter(room => room.fields.pets === true);
    }
    return tempRooms;
};

const roomsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoomsActionTypes.FILTER_ROOM_TYPES:
            return {
                ...state,
                sortedRooms: filterRooms(state.rooms, action.payload, state.capacity, state.price, state.minSize, state.maxSize, state.breakfast, state.pets)
            };
        case RoomsActionTypes.FILTER_ROOM_CAPACITY:
            return {
                ...state,
                sortedRooms: filterRooms(state.rooms, state.type, action.payload, state.price, state.minSize, state.maxSize, state.breakfast, state.pets)
            };
        case RoomsActionTypes.FILTER_PRICE_RANGE:
            return {
                ...state,
                price: action.payload,
                sortedRooms: filterRooms(state.rooms, state.type, state.capacity, action.payload, state.minSize, state.maxSize, state.breakfast, state.pets)
            };

        case RoomsActionTypes.FILTER_MIN_SIZE:
            return {
                ...state,
                minSize: action.payload
            };
        case RoomsActionTypes.FILTER_MAX_SIZE:
            return {
                ...state,
                maxSize: action.payload,
                sortedRooms: filterRooms(state.rooms, state.type, state.capacity, state.price, state.minSize, action.payload, state.breakfast, state.pets)
            };
        case RoomsActionTypes.FILTER_BREAFAST:
            return {
                ...state,
                breakfast: !state.breakfast,
                sortedRooms: filterRooms(state.rooms, state.type, state.capacity, state.price, state.minSize, state.maxSize, !state.breakfast, state.pets)
            };
        case RoomsActionTypes.FILTER_PETS:
            return {
                ...state,
                pets: !state.pets,
                sortedRooms: filterRooms(state.rooms, state.type, state.capacity, state.price, state.minSize, state.maxSize, state.breakfast, !state.pets)
            }
        default:
            return state;
    }
};

export default roomsReducer;