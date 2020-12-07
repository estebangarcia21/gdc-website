import {
    ADD_RESOURCE,
    ResourceActionTypes,
    ResourceObject,
    VIEW_RESOURCE,
} from "./types";

export const addResource = (resource: ResourceObject): ResourceActionTypes => {
    return {
        type: ADD_RESOURCE,
        payload: resource,
    };
};

export const viewResource = (resource: ResourceObject): ResourceActionTypes => {
    return {
        type: VIEW_RESOURCE,
        payload: resource,
    };
};
