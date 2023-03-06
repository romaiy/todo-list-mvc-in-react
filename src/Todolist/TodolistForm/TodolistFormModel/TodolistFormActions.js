import actionTypes from './TodolistFormActionTypes';

const setTodolistOptions = (todolistOptions) => ({
    type: actionTypes.SET_TODOLIST_OPTIONS,
    payload: { todolistOptions },
});

const changeField = (change) => ({
    type: actionTypes.CHANGE_FIELD,
    payload: change,
});