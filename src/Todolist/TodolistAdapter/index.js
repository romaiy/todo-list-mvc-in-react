import React, { useCallback, useEffect, useState } from "react";
import getType from "../getType";
import TodolistForm from "../TodolistForm";
import getSelectedType from "./getSelectedType";
import toTypeOption from "./toTypeOption";
import { useTodolistTasksContext } from "../TodolistTasksProvider";

const TodolistFormAdapter = () => {
    const [tasks, addTasks, ,save] = useTodolistTasksContext();
    const [types, setTypes] = useState([]);

    const getTypeFromApi = useCallback(async () => {
        setTypes(await getType());
    }, []);

    useEffect(() => {
        getTypeFromApi();
    }, [getTypeFromApi]);

    const handleAdd = (fields) => {
        const { title, description, type } = fields;

        addTasks({
            title,
            description,
            type: getSelectedType(types, type),
        });
    };

    return (
        <TodolistForm 
            todoOptions={types.map(toTypeOption)}
            onAdd={handleAdd}
            handleSave={save}
            tasks={tasks}
        />
    );
};

export default TodolistFormAdapter;