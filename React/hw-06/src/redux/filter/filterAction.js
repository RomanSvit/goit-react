import { Type } from "./filterType";

export const getFilterValue = value => ({
  type: Type.FILTER_VALUE,
  payload: value
});