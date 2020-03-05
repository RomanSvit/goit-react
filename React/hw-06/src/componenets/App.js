import React, { Component } from "react";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Form from "./form/Form";
import Section from "./section/Section";
import uuid from "uuid";
import css from "./App.module.css";
import { connect } from "react-redux";
import {
  addContacts,
  deleteContacts,
  getFilterValue
} from "../redux/createActions";

const handleFindContact = (filter, contacts) =>
  contacts.length >= 2
    ? contacts.filter(elem =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

class App extends Component {
  state = {
    name: "",
    number: ""
  };
  componentDidMount() {
    const keyLocalContacts = localStorage.getItem("contacts");
    if (keyLocalContacts) {
      this.setState({ contacts: JSON.parse(keyLocalContacts) });
    }
  }
  changeFilter = e => {
    this.props.getFilterValue(e.target.value);
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
    const { name, number } = this.state;

    const newContact = {
      name: name,
      number: number,
      id: this.getId()
    };
    const hasContact = this.props.contacts.find(
      elem => elem.name.toLowerCase() === e.target.name.value.toLowerCase()
    );
    !hasContact
      ? this.props.addContacts(newContact)
      : alert(`${hasContact.name} is already in contacts!`);
  };
  handleDeleteConctact = e => {
    this.props.deleteContacts(e.target.id);
  };

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
    }
  }
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = handleFindContact(filter, contacts);
    return (
      <>
        <div className={css.mainBlock}>
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
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ contacts, filter }) => ({
  contacts,
  filter
});

export default connect(mapStateToProps, {
  addContacts,
  deleteContacts,
  getFilterValue
})(App);
