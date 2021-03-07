import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
// import appearFormStyles from './transitionsStyles/appearFormStyles.module.css';
import fadeStyles from './transitionsStyles/fade.module.css';
import searchFadeStyles from './transitionsStyles/searchFadeStyles.module.css';
import s from './App.module.css';
import Container from './components/Container';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import contactsOperations from './redux/contacts/contacts-operations';
import { render } from '@testing-library/react';

class App extends Component {

  static propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
    ),
    fetchContacts: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchContacts();
  }
  
render() {
  return (
    <Container>
      <div className={s.Wrapper}>
        {this.props.error ? <h1 style={{color:'red'}}>Error: {this.props.error.message}</h1> : null}
      <Title title="Phonebook" level={1} />
      {/* <CSSTransition in={true} appear={true} timeout={500} classNames={appearFormStyles} unmountOnExit> */}
      <ContactForm />
      {/* </CSSTransition> */}
      <Title title="Contacts" level={2} />
      <CSSTransition in={this.props.contacts.length > 1} classNames={searchFadeStyles} timeout={250} unmountOnExit>
        <Filter />
        </CSSTransition>
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
      <CSSTransition in={this.props.contacts.length !== 0} classNames={fadeStyles} timeout={250} unmountOnExit>
        <ContactList />
        </CSSTransition>
    </div>
  </Container>)
}
};

const mapStateToProps = state =>({
  contacts: state.contacts.items,
  isLoadingContacts: state.contacts.loading,
  error: state.contacts.error,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
