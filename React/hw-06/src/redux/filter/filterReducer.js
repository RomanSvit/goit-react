import { Type } from "./filterType";

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case Type.FILTER_VALUE:
      return action.payload;
    default:
      return state;
  }
};
