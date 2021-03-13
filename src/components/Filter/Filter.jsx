import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import shortid from 'shortid';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
// import * as contactsActions from '../../redux/contacts/contacts-actions';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({ name, onChange }) => {
  let inputFilterId = shortid.generate();
  return (
    <div className={s.filterWrapper}>
      <label className={s.label} htmlFor={inputFilterId}>
        <span>
          Find contacts by name
        </span>
      </label>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        id={inputFilterId}
        value={name}
        onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
