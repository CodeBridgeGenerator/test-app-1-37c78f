import React from "react";
import { render, screen } from "@testing-library/react";

import StudentlistPage from "../StudentlistPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders studentlist page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <StudentlistPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("studentlist-datatable")).toBeInTheDocument();
    expect(screen.getByRole("studentlist-add-button")).toBeInTheDocument();
});
