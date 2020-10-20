import { LOAD_DEFAULT_VALUE } from './../Actions/actionTypes';
// import { CLICK_ADD_VALUE } from './../Actions/actionTypes';

const initialState = {
    defaultValues: []
};

export const loadDefaultValues = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEFAULT_VALUE:
            return {
                ...state,
                defaultValues: action.defaultValues
            };
        default:
            return state;
    }
};

// export const addNewItem = (state = initialState, action) => {
//     switch (action.type) {        
//         case CLICK_ADD_VALUE:
//         return {
//             ...state,
//             defaultValues: action.defaultValues
//             };
//         default:
//             return state;
//     }
// };