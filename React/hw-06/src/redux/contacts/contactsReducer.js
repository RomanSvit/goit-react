import { Type } from "./contactsType";

const initialState = [
    {
      id: "6b2b6280-28a2-4540-b798-c728e616b081",
      name: "Rosie Simpson",
      number: "459-12-56"
    },
    {
      id: "9eabec56-273c-497c-8785-e05d8f57949a",
      name: "Hermione Kline",
      number: "443-89-12"
    },
    {
      id: "1f3f0d57-3e62-4e6f-9a18-4e97d9200717",
      name: "Eden Clements",
      number: "645-17-79"
    },
    {
      id: "65b5bbb4-f3d9-4fc3-a12e-7231271b3296",
      name: "Annie Copeland",
      number: "227-91-26"
    }
  ]

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.ADD_CONTACT:
      return [...state, action.payload];
    case Type.DELETE_CONTACT:
      return state.filter(el => el.id !== action.payload);
    case Type.GET_LOCAL_CONTACTS:
      return action.payload ? action.payload : state;
    default:
      return state;
  }
};
