import { List, ListItem, ListItemAvatar, Typography, ListItemText } from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import React from "react";
import { useTodolistTasksContext } from "./TodolistTasksProvider";

const TodolistTasks = () => {
    const [tasks] = useTodolistTasksContext();

    return (
        <div>
            <Typography variant="h6">Tasks</Typography>
            <List>
                {tasks.map(({ id, title, description }) => (
                    <ListItem key={id}>
                        <ListItemAvatar>
                            <Check color="primary" />
                        </ListItemAvatar>
                        <ListItemText>
                            {title} - {description}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodolistTasks;