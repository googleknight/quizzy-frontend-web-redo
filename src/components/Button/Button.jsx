import React from 'react';

import './Button.css';

const Button = props => (
  <div>
    <button type="button" onClick={props.onClick}>{props.value}</button>
  </div>
);

export default Button;
