import React from "react";
import Task from "../components/Task";
import { useTodolistTasksContext } from "./TodolistTasksProvider";

const TodolistTasks = () => {
    const [tasks] = useTodolistTasksContext();
    // удалить эту фигню  и посмотреть как менять значение контекста, а id и состояние передавать в контрол
    const setCompleted = (id, isCompleted) => {
        const newTasks = tasks.map((task) => (
            (task.id === (id))
            ? { ...task, isCompleted: !isCompleted }
            : task
        ));
        console.table(tasks);
    }

    return (
        <div className="task">
            <div className="task__content container">
                <h2 className="task__heading">Tasks</h2>
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
