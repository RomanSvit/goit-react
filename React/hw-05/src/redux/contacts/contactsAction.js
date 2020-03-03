import { Type } from "./contactsType";

export const addContact = newContact => ({
  type: Type.ADD_CONTACT,
  payload: newContact
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: id
});

export const getLocalContacts = localContacts => ({
  type: Type.GET_LOCAL_CONTACTS,
  payload: localContacts
});
