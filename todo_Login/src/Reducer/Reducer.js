import * as type from "./Action";
import { initialValue } from "./Store";

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case type.LOADING_TODO_ITEMS:
      return { ...state, isLoading: true };

    case type.ERROR_TODO_ITEMS:
      return { ...state, isLoading: false, isError: true };

    case type.ADD_TODO_ITEMS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: [
          ...state.items,
          {
            id: Date.now(),
            text: action.payload,
            isEdit: false,
            isCompleted: false,
          },
        ],
      };

    case type.EDIT_TODO_ITEMS:
      if (action.payload.updatedText && action.payload.id) {
        return {
          ...state,
          items: state.items.map((el) =>
            el.id === action.payload.id
              ? {
                  ...el,
                  isEdits: !el.isEdits,
                  text: action.payload.updatedText,
                }
              : el
          ),
        };
      } else {
        return {
          ...state,
          items: state.items.map((el) =>
            el.id === action.payload ? { ...el, isEdits: !el.isEdits } : el
          ),
        };
      }

    case type.DELETE_TODO_ITEMS:
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
