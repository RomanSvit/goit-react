/* eslint-disable no-undef */
import React, { Component } from "react";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Form from "./form/Form";
import Section from "./section/Section";
import uuid from "uuid";

// const CONTACTS = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
// ];
const handleFindContact = (contacts, filter) => {
  return contacts.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );
};
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    name: "",
    number: "",
    filter: ""
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  showName = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getId = () => {
    return uuid.v4();
  };

  handleSubmit = e => {
    e.preventDefault();
    const object = {
      name: this.state.name,
      number: this.state.number,
      id: this.getId()
    };
    this.setState(prevstate => {
      return {
        contacts: [...prevstate.contacts, object],
        name: "",
        number: "",
        id: ""
      };
    });
  };
  handleDeleteConctact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e.target.id)
    });
  };
  render() {
    console.log("object", this.state.contacts);
    const { contacts, filter } = this.state;
    const filteredContacts = handleFindContact(contacts,filter);
    console.log(filteredContacts);
    return (
      <>
        <Section title="Phonebook">
          <Form
            showName={this.showName}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            number={this.state.number}
          />
        </Section>
        <Section title="Contacts">
          <Filter onHandleFind={this.changeFilter} value={filter} />
          <ContactList
            arr={filteredContacts}
            onDelete={this.handleDeleteConctact}
            onHandleFind={this.changeFilter}
            value={filter}
          />
        </Section>
      </>
    );
  }
}

export default App;
