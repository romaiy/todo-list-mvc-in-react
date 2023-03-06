import React from "react";
import { Grid, Box } from "@material-ui/core";
import TodolistTasksProvider from "./TodolistTasksProvider";
import TodolistFormAdapter from "./TodolistAdapter";
import TodolistForm from "./TodolistForm";
import TodolistTasks from "./TodolistTasks";

const Todolist = () => {
    return(
        <TodolistTasksProvider>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box pt={4} pb={4}>
                        <TodolistFormAdapter>
                            <TodolistForm/>
                        </TodolistFormAdapter>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <TodolistTasks/>
                </Grid>
            </Grid>
        </TodolistTasksProvider>
    )
}

export default Todolist;