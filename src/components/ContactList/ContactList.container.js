import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  };

const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: getVisibleContacts(items,  filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);