import React from "react";

const Task = ({ item, setCompleted, hide }) => {
  const id = `comleted${item.id}`;
    
  return(
    <li 
      className="task__block" 
      style={(hide && item.isCompleted) ? 
        {display: "none"} : (item.isCompleted) ? 
        {pointerEvents: 'none'} : {}}
    >
      <div className="task__modal">
        <div className="task__description">
          {item.description}
        </div>
      </div>
      <div className="task__row">
        <div style={(item.isCompleted) ? {pointerEvents: 'auto'} : {}} className="checkbox">
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