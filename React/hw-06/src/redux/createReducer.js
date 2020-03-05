import Type from "./types";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
  ],
  filter: ""
};

const phoneBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACTS:
      
      return { ...state, contacts: [...state.contacts, payload] };
    case Type.DELETE_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts.filter(el => el.id !== payload)]
      };
    case Type.GET_FILTER_VALUE:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
export default phoneBookReducer;
