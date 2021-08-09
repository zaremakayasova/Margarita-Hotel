import RoomsActionTypes from './rooms.types';


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

export const filterMinSize = minSize => ({
    type: RoomsActionTypes.FILTER_MIN_SIZE,
    payload: minSize
});

export const filterMaxSize = maxSize => ({
    type: RoomsActionTypes.FILTER_MAX_SIZE,
    payload: maxSize
});

export const filterBreakfast = () => ({
    type: RoomsActionTypes.FILTER_BREAFAST
});

export const filterPets = pets => ({
    type: RoomsActionTypes.FILTER_PETS,
    payload: pets
});



