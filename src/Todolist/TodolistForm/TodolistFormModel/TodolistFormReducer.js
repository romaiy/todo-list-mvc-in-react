import actionTypes from './TodolistFormActionTypes';

const isTodolistFormModelValid = (model) => {
    const {
        fields: { title, description, type },
    } = model;

    return !!(title.value && description.value && title.value.length > 2 && type.value);
};

const withValidation = (state, field, value) => {
    const changedState = {
        ...state,
        fields: {
            ...state.fields,
            [field]: {
                ...state.fields[field],
                value,
            },
        },
    };

    return {
        ...changedState,
        isValid: isTodolistFormModelValid(changedState),
    };
};

const TodolistFormReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.SET_TODOLIST_OPTIONS:
            return {
                ...state,
                isLoading: payload.todolistOptions.length === 0,
                fields: {
                    ...state.fields,
                    type: {
                        ...state.fields.type,
                        options: payload.todolistOptions,
                    },
                },
            };

        case actionTypes.CHANGE_FIELD:
            return withValidation(state, payload.field, payload.value);

        default:
            return state;
    }
};

export default TodolistFormReducer;