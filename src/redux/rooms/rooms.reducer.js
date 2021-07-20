import RoomsActionTypes from './rooms.types';
import roomsData from './data';

const INITIAL_STATE = {
    rooms: roomsData
};

const roomsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoomsActionTypes.ADD_NEW_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                successMsg: 'A new todo has been added to your list!'
            };
        default:
            return state;
    }
};

export default roomsReducer;