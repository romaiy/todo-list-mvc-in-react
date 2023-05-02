import React, { createContext, useContext, useState } from "react";
import { saveAs } from 'file-saver';

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
            t.description === newTasks.description 
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

    const handleSave = (tasks) => {
        const fileName = `Tasks.txt`;
        const file = new Blob([JSON.stringify(tasks)], {type: 'text/plain;charset=utf-8'});
        saveAs(file, fileName);
    };

    return (
        <Context.Provider value={[tasks, addTasks, setCompleted, handleSave]}>
            {children}
        </Context.Provider>
    );
};

export const useTodolistTasksContext = () => useContext(Context);

export default TodolistTasksProvider;