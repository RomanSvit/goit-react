import { connect } from 'react-redux';
import Phonebook from '../phoneBook/PhoneBook';
import { addContact, deleteContact, getLocalContacts } from '../../redux/contacts/contactsAction';
import { getFilterValue } from '../../redux/filter/filterAction';

const mapStateToProps = ({ contacts, filter }) => ({ contacts, filter });

export default connect(mapStateToProps, ({ addContact, deleteContact, getFilterValue, getLocalContacts }))( Phonebook );