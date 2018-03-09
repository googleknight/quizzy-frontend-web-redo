import React from 'react';

import './Header.css';

const Header = props => (
  <div className="Header-container">
    <p className="Header-appname">Quizzy</p>
    <p className="Header-username">{props.username}</p>
  </div>
);

export default Header;
