import { changeFilterType } from './changeFilterType';
import { combineReducers } from 'redux';
import { loadDefaultValues } from './loadDefaultValues';
import { addNewItem } from './addNewItem';

export const Reducers = combineReducers({
  changeFilterType: changeFilterType,
  addNewItem: addNewItem,
  loadDefaultValues: loadDefaultValues

});