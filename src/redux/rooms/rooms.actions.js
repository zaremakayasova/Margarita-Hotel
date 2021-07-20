import RoomsActionTypes from './rooms.types';

export const addNewTodo = newTodo => ({
    type: RoomsActionTypes.ADD_NEW_TODO,
    payload: newTodo
});