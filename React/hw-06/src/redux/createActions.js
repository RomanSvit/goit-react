import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FIND_CONTACTS
} from "./types";

const addContacts = contacts => ({
  type: ADD_CONTACTS,
  payload: contacts
});
const deleteContacts = contacts => ({
  type: DELETE_CONTACTS,
  payload: contacts
});
const findContacts = contacts => ({
  type: FIND_CONTACTS,
  payload: contacts
});

export { addContacts, deleteContacts, findContacts };