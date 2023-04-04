import React from "react";

const Task = ({ item, setCompleted }) => {
  const id = `comleted${item.id}`;
    
  return(
    <li className="task__block">
      <div className="task__row">
        <div>
          <input 
            className="custom-checkbox"
            type="checkbox" 
            id={id} 
            name="comleted"
            onChange={() => setCompleted(item.id, item.isCompleted)}
          />
          <label className="task__title" htmlFor={id}></label>
        </div>
        <div 
          className="task__title"
          style={(item.isCompleted) ? {textDecorationLine: 'line-through'} : {}}
        >
          {item.title}
        </div>
      </div>
    </li>
  )
};

export default Task;