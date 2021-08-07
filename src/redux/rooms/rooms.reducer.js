import RoomsActionTypes from './rooms.types';
import roomsData from './data';

const INITIAL_STATE = {
    sortedRooms: roomsData,
    tempRooms: roomsData,
    price: 600,
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
        default:
            return state;
    }
};

export default roomsReducer;