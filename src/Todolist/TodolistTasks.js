import React, { useState } from "react";
import CompletedTask from "../components/CompletedTask";
import Task from "../components/Task";
import { useTodolistTasksContext } from "./TodolistTasksProvider";

const TodolistTasks = () => {
    const [tasks, add, set] = useTodolistTasksContext();
    const [hide, setHide] = useState(false);
    
    const setCompleted = (id) => {
        console.log(add);
        console.clear();
        set(id);
    };

    const handleHide = (id) => {
        setHide(!hide);
    };

    return (
        <div className="task">
            <div className="task__content container">
                <CompletedTask handleHide={handleHide}/>
                <ul className="task__list">
                {tasks.map((item) => (
                    <Task key={item.id} hide={hide} item={item} setCompleted={setCompleted}/>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default TodolistTasks;
