import RoomsActionTypes from './rooms.types';
import roomsData from './data';

const INITIAL_STATE = {
    sortedRooms: roomsData,
    tempRooms: roomsData,
    price: 600,
    minSize: 0,
    maxSize: 1000,
    breakfast: false,
    pets: false
}

const filterType = (tempRooms, payload) => {
    if (payload !== 'all') {
        return tempRooms.filter(room => room.fields.type === payload);
    };
    return tempRooms;
};

const filterCapacity = (tempRooms, payload) => {
    if (payload !== 1) {
        return tempRooms.filter(room => room.fields.capacity === payload);
    };
    return tempRooms;
};

const filterPrice = (tempRooms, payload) => {
    return tempRooms.filter(room => room.fields.price <= payload);
};

const filterSize = (tempRooms, minSize, maxSize) => {
    return tempRooms.filter(room => room.fields.size >= minSize && room.fields.size <= maxSize);
};

const filterBreakfast = (tempRooms, breakfast) => {
    if (breakfast === false) {
        return tempRooms.filter(room => room.fields.breakfast === true);
    }
    return tempRooms;
};

const filterPets = (tempRooms, pets) => {
    if (pets === false) {
        return tempRooms.filter(room => room.fields.pets === true);
    }
    return tempRooms;
};


const roomsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoomsActionTypes.FILTER_ROOM_TYPES:
            return {
                ...state,
                sortedRooms: filterType(state.tempRooms, action.payload)
            };
        case RoomsActionTypes.FILTER_ROOM_CAPACITY:
            return {
                ...state,
                sortedRooms: filterCapacity(state.tempRooms, action.payload)
            };
        case RoomsActionTypes.FILTER_PRICE_RANGE:
            return {
                ...state,
                sortedRooms: filterPrice(state.tempRooms, action.payload),
                price: action.payload
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
                sortedRooms: filterSize(state.tempRooms, state.minSize, action.payload)
            };
        case RoomsActionTypes.FILTER_BREAFAST:
            return {
                ...state,
                breakfast: !state.breakfast,
                sortedRooms: filterBreakfast(state.tempRooms, state.breakfast)
            };
        case RoomsActionTypes.FILTER_PETS:
            return {
                ...state,
                pets: !state.pets,
                sortedRooms: filterPets(state.tempRooms, state.pets)
            };
        default:
            return state;
    }
};

export default roomsReducer;