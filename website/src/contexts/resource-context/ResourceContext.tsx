import React, { createContext, Dispatch, useReducer } from "react";
import Welcome from "../../pages/resource-pages/Welcome";
import { ComponentChildren } from "../../utils/component-children";
import { resourceReducer } from "./reducers";
import { ResourceStates } from "./types";

const initialState: ResourceStates = {
    resources: [
        {
            name: "Welcome",
            page: Welcome,
            isActive: true,
        },
    ],
};

export const ResourceContext = createContext<{
    state: ResourceStates;
    dispatch: Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const ResourceContextProvider = ({ children }: ComponentChildren) => {
    const [state, dispatch] = useReducer(resourceReducer, initialState);

    return (
        <ResourceContext.Provider value={{ state, dispatch }}>
            {children}
        </ResourceContext.Provider>
    );
};
