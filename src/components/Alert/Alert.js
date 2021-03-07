import React from 'react';
import PropTypes from 'prop-types';
import s from './Alert.module.css';

const Alert = ({text}) => {
  return (
    <div className={s.Container}>
      <p className={s.Text}>{text}</p>
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Alert;