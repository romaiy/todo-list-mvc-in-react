import React, { useReducer, useEffect } from "react";
import initialModel from "./TodolistFormModel";
import action from "./TodolistFormModel/TodolistFormActions";
import View from "./TodolistFormView";
import reducer from "./TodolistFormModel/TodolistFormReducer";

const TodolistForm = ({ todoOptions, onAdd, handleSave, tasks }) => {
    const [model, dispatch] = useReducer(reducer, initialModel);

    useEffect(() => {
        dispatch(action.setTodolistOptions(todoOptions));
    }, [todoOptions]);

    const handleFieldChange = (change) => {
        dispatch(action.changeField(change));
    };

    const handleAdd = () => {
        const {
            fields: { title, description, type },
        } = model;

        onAdd({ title: title.value, description: description.value, type: type.value});
    };

    return (
        <View 
            model={model}
            onFieldChange={handleFieldChange}
            onAdd={handleAdd}
            handleSave={handleSave}
            tasks={tasks}
        />
    );
};

export default TodolistForm;