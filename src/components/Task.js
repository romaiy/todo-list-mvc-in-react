import React from "react";
import TaskType from "./TaskType";

const Task = ({ item, setCompleted }) => {
    const id = `comleted${item.id}`;
    
    return(
        <li className="task__block">
            <div className="task__column">
                <div className="task__row">
                    <h3 className="task__title" style={(item.isCompleted) ? {textDecorationLine: 'line-through'} : {}}>{item.title}</h3>
                    <div>
                    <input 
                        className="custom-checkbox"
                        type="checkbox" 
                        id={id} 
                        name="comleted"
                        onChange={() => setCompleted(item.id, item.isCompleted)}
                    />
                    <label className="task__title" htmlFor={id}>Done</label>
                    </div>
                </div>
                <p className="task__description">{item.description}</p>
                <TaskType  name={item.type.name} />
            </div>
        </li>
    )
};

export default Task;