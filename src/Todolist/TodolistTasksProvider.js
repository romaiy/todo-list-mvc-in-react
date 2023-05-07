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
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let object = JSON.parse(localStorage.getItem(key));
        array.push(object);
    };

    const [tasks, setTasks] = useState(array);

    const addTasks = (newTasks) => {
        if (isAlreadyAdded(tasks, newTasks)) {
            return;
        }

        localStorage.setItem(`task${tasks.length + 1}`, JSON.stringify(addId(tasks, newTasks)));
        setTasks([...tasks, addId(tasks, newTasks)]);
    };

    const setCompleted = (id) => {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                localStorage.setItem(`task${id}`, JSON.stringify({...task, isCompleted: !task.isCompleted}));
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