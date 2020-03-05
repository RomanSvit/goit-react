import Type from "./types";

const addContacts = newContact => ({
  type: Type.ADD_CONTACTS,
  payload: newContact
});
const deleteContacts = id => ({
  type: Type.DELETE_CONTACTS,
  payload: id
});
const getFilterValue = value => ({
  type: Type.GET_FILTER_VALUE,
  payload: value
});
export { addContacts, deleteContacts, getFilterValue };
