import { CLICK_ADD_VALUE } from './../Actions/actionTypes';

const initialState = {
    defaultValues: []
};

export const addNewItem = (state = initialState, action) => {
    switch (action.type) {        
        case CLICK_ADD_VALUE:
            return {
                ...state,
                defaultValues: action.defaultValues
            };
        default:
            return state;
    }
};