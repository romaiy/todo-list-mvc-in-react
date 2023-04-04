import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Header from "../../components/Header";

const TodolistFormView = (props) => {

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
            <Header/>
            <form onSubmit={handleAdd} noValidate autoComplete="off">
                <input
                    id="title"
                    placeholder="Title"
                    className="input"
                    label="Title"
                    required
                    onChange={(e) => handleTitleChange(e)}
                />

                <input
                    id="description"
                    placeholder="Description"
                    className="input"
                    label="Description"
                    variant="filled"
                    onChange={(e) => handleDescriptionChange(e)}
                />

                <div className="row">
                    <div
                        variant="filled"
                        required
                    >
                        {isLoading ? (
                            <CircularProgress/>
                        ) : (
                            <div>
                            <select
                                style={
                                    {background: "#23262C", 
                                    border: '1px solid #adb5bd', 
                                    borderRadius: '0.25em',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    opacity: '0.6'}
                                }
                                id="type"
                                value={selectedType}
                                onChange={(e) => handleTypeChange(e)}
                            >
                                <option/>
                                {type.options.map(({ label, value }) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                            </div>
                        )}
                    </div>

                    <button
                        className="button"
                        type="submit"
                        disabled={!isValid}
                        style={(!isValid) ? {background: "#575f6c"} : {}}
                    >
                        Add
                    </button>
                </div>
            </form>
            <div className="line"></div>
        </div>
    );
};

export default TodolistFormView;