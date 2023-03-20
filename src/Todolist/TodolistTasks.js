import React from "react";
import TaskType from "../components/TaskType";
import { useTodolistTasksContext } from "./TodolistTasksProvider";

const TodolistTasks = () => {
    const [tasks] = useTodolistTasksContext();

    return (
        <div className="task">
            <div className="task__content container">
                <h2 className="task__heading">Tasks</h2>
                <ul className="task__list">
                {tasks.map((item) => (
                    <li className="task__block" key={item.id}>
                        <div className="task__column">
                            <h3 className="task__title">{item.title} - {item.isCompleted}</h3>
                            <p className="task__description">{item.description}</p>
                            <TaskType  name={item.type.name} />
                        </div>
                        <div className="task__column"></div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default TodolistTasks;