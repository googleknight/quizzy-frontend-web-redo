import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Button from '../Button/Button';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  onTextChange=(event) => {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Header username={null} />
        <div className="Login-body">
          <div className="Login-box">
            <div className="Login-box-left">
              <p>Welcome</p>
              <p>to</p>
              <p>Quizzy!</p>
            </div>
            <div className="Login-box-right">
              <p> Login</p>
              <p>Username</p>
              <input type="text" className="Login-box-right-textbox" onChange={this.onTextChange} />
              <Button onClick={() => this.props.callBackfromApp(this.state.username)} value="Login" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  callBackfromApp: PropTypes.func,
};
Login.defaultProps = {
  callBackfromApp: () => null,
};
export default Login;
