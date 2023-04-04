import React from "react";
import { useTodolistTasksContext } from "../Todolist/TodolistTasksProvider";
import noEye from '../image/NoEye.svg'; 

const CompletedTask = ({handleHide}) => {
    const [tasks] = useTodolistTasksContext();

    const count = tasks.reduce((acc, item) => {
        if (item.isCompleted === true) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return(
        <div className="completed">
            <div className="completed__count">
                <div style={{width: "10px", marginRight: "3px"}} className="completed__text">
                {count} 
                </div>
                Comleted
            </div>
            <div className="completed__hiden" onClick={() => handleHide()}>
                <img src={noEye} alt="hiden"/>
                Hide completed
            </div>
        </div>
    );
};

export default CompletedTask;