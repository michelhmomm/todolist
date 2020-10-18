import { CLICK_UPDATE_VALUE } from './../Actions/actionTypes';

const initialState = {
    newValue: '1'
};

export const changeFilterType = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};