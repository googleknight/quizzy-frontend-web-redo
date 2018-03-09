import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <div className="Header-container">
    <p className="Header-appname">Quizzy</p>
    <p className="Header-username">{props.username}</p>
  </div>
);
Header.propTypes = {
  username: PropTypes.string,
};
Header.defaultProps = {
  username: '',
};
export default Header;
