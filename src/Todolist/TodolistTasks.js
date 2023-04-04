import React from "react";
import Task from "../components/Task";
import { useTodolistTasksContext } from "./TodolistTasksProvider";

const TodolistTasks = () => {
    const [tasks, add, set] = useTodolistTasksContext();
    
    const setCompleted = (id) => {
        console.log(add);
        console.clear();
        set(id);
    }

    return (
        <div className="task">
            <div className="task__content container">
                <ul className="task__list">
                {tasks.map((item) => (
                    <Task key={item.id} item={item} setCompleted={setCompleted}/>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default TodolistTasks;
