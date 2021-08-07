import RoomsActionTypes from './rooms.types';

export const addNewTodo = newTodo => ({
    type: RoomsActionTypes.ADD_NEW_TODO,
    payload: newTodo
});

export const filterRoomTypes = roomType => ({
    type: RoomsActionTypes.FILTER_ROOM_TYPES,
    payload: roomType
});

export const filterRoomCapacity = roomCapacity => ({
    type: RoomsActionTypes.FILTER_ROOM_CAPACITY,
    payload: roomCapacity
});

export const filterPriceRange = roomPrice => ({
    type: RoomsActionTypes.FILTER_PRICE_RANGE,
    payload: roomPrice
});



