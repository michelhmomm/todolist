import { CLICK_UPDATE_VALUE } from './actionTypes';
import { CLICK_ADD_VALUE } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});

export const addNewItem = value => ({
    type: CLICK_ADD_VALUE,
    defaultValues: value
});