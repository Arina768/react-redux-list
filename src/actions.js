import { SAVE_LIST, DELETE_ITEM, ADD_ITEM, CHANGE_ITEM } from './constants';

export const saveListAction = (list) => ({
  type: SAVE_LIST,
  payload: list,
});

export const deleteItemAction = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});

export const addItemAction = (value) => ({
  type: ADD_ITEM,
});

export const changeItemAction = ({ itemId, value }) => ({
  type: CHANGE_ITEM,
});
