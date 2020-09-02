import { SAVE_LIST, CHANGE_ITEM, ADD_ITEM, DELETE_ITEM } from '../constants';

const defaultState = {
  items: [],
};

export const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_LIST: {
      return {
        items: action.payload,
      };
    }

    case CHANGE_ITEM: {
      return state;
    }

    case ADD_ITEM: {
      return state;
    }

    case DELETE_ITEM: {
      return {
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    }
  }

  return state;
};
