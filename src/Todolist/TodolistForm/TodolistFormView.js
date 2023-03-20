import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, Button, Typography, TextField, Select, InputLabel, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formField: {
        marginBottom: theme.spacing(3),
    },
}));

const TodolistFormView = (props) => {
    const classes = useStyles();

    const {
        model: {
            isLoading,
            isValid,
            fields: { type },
        },
        onFieldChange,
        onAdd,
    } = props;

    const [selectedType, setSelectedType] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        onAdd();
    };

    const handleTitleChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        onFieldChange({ field: "title", value });
    };

    const handleDescriptionChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        onFieldChange({ field: "description", value });
    };

    const handleTypeChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        setSelectedType(value);

        onFieldChange({ field: "type", value });
    };

    return (
        <div>
            <Typography variant="h6" guetterBottom>
                Add a new task
            </Typography>

            <form onSubmit={handleAdd} noValidate autoComplete="off">
                <TextField
                    id="title"
                    className={classes.formField}
                    label="Title"
                    variant="filled"
                    fullWidth
                    required
                    onChange={(e) => handleTitleChange(e)}
                />

                <TextField
                    id="description"
                    className={classes.formField}
                    label="Description"
                    variant="filled"
                    fullWidth
                    required
                    onChange={(e) => handleDescriptionChange(e)}
                />

                <FormControl
                    variant="filled"
                    className={classes.formField}
                    fullWidth
                    required
                >
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <>
                        <InputLabel id="type">Type</InputLabel>
                        <Select
                            id="type"
                            value={selectedType}
                            onChange={(e) => handleTypeChange(e)}
                        >
                            {type.options.map(({ label, value }) => (
                                <MenuItem key={value} value={value}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                        </>
                    )}
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                >
                    Add
                </Button>
            </form>
        </div>
    );
};

export default TodolistFormView;