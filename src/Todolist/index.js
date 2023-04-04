import React from "react";
import TodolistTasksProvider from "./TodolistTasksProvider";
import TodolistFormAdapter from "./TodolistAdapter";
import TodolistForm from "./TodolistForm";
import TodolistTasks from "./TodolistTasks";

const Todolist = () => {
    return(
        <TodolistTasksProvider>
            
            <TodolistFormAdapter>
                <TodolistForm/>
            </TodolistFormAdapter>

            <TodolistTasks/>
        
        </TodolistTasksProvider>
    )
}

export default Todolist;