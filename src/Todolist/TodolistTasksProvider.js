import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

const addId = (tasks, task) => ({
    id: tasks.length + 1,
    isCompleted: false,
    ...task,
});

const isAlreadyAdded = (tasks, newTasks) =>
    tasks.reduce((exist, t) => {
        if (
            t.title === newTasks.title &&
            t.description === newTasks.description &&
            t.type.code === newTasks.type.code
        ) {
            return true;
        }
        return exist;
    }, false);

const TodolistTasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTasks = (newTasks) => {
        if (isAlreadyAdded(tasks, newTasks)) {
            return;
        }

        setTasks([...tasks, addId(tasks, newTasks)]);
    };

    const setCompleted = (id) => {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, isCompleted: !task.isCompleted}
            }
            return task;
        }));
    };

    return (
        <Context.Provider value={[tasks, addTasks, setCompleted]}>
            {children}
        </Context.Provider>
    );
};

export const useTodolistTasksContext = () => useContext(Context);

export default TodolistTasksProvider;