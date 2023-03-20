import React, { useCallback, useEffect, useState } from "react";
import getType from "../getType";
import TodolistForm from "../TodolistForm";
import getSelectedType from "./getSelectedType";
import toTypeOption from "./toTypeOption";
import { useTodolistTasksContext } from "../TodolistTasksProvider";

const TodolistFormAdapter = () => {
    const [, addTasks] = useTodolistTasksContext();
    const [types, setTypes] = useState([]);

    const getTypeFromApi = useCallback(async () => {
        setTypes(await getType());
    }, []);

    useEffect(() => {
        getTypeFromApi();
    }, [getTypeFromApi]);

    const handleAdd = (fields) => {
        const { title, description, type, isCompleted } = fields;

        addTasks({
            title,
            description,
            type: getSelectedType(types, type),
            isCompleted,
        });
    };

    return (
        <TodolistForm 
            todoOptions={types.map(toTypeOption)}
            onAdd={handleAdd}
        />
    );
};

export default TodolistFormAdapter;