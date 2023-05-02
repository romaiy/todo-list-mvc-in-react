import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import { describe } from '@jest/globals';
import TodolistForm from "../index";

describe("TodolistForm", () => {
    const notepadColors = [
        {
            code: "sport",
            name: "Sport",
        },
        {
            code: "reading",
            name: "Reading",
        },
        {
            code: "hobby",
            name: "Hobby",
        },
    ];
    const title = "title";
    const description = "description";

    const fillInTitle = async () => {
        const titleInputEl = await screen.findByRole("textbox", {
        name: /title/i,
        });
        fireEvent.change(titleInputEl, { target: { value: title } });
    };

    const fillInDescription = async () => {
        const descriptionInputEl = await screen.findByRole("textbox", {
        name: /description/i,
        });
        fireEvent.change(descriptionInputEl, { target: { value: description } });
    };

    const selectType = async () => {
        const colorSelectButtonEl = await screen.findByRole("combobox", {
            name: /type/i,
        });
        fireEvent.mouseDown(colorSelectButtonEl);
        const newsletterSelectEl = await screen.findByText("Type");
        fireEvent.change(colorSelectButtonEl, newsletterSelectEl);
    };

    const handleAdd = async () => {
        const addButtonEl = await screen.findByRole("button", {
            name: /add/i,
        });
        fireEvent.submit(addButtonEl);
    };

    it("ok", async () => {
        const onAddSpy = jest.fn();

    render(
        <TodolistForm
            todoOptions={notepadColors}
            onAdd={onAddSpy}
        />
    );

    await fillInTitle();
    await fillInDescription();
    await selectType();
    await handleAdd();

    expect(onAddSpy).toHaveBeenCalledWith({
        title,
        description,
        type: ''
    });
    });
});