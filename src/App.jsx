import React, { Component } from 'react';
import Login from './components/Login/Login';
import QuizPage from './components/QuizPage/QuizPage';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Login',
      data: [],
    };
  }
  render() {
    let page;
    if (this.state.currentPage === 'Login') {
      page = <Login />;
    } else if (this.state.currentPage === 'QuizPage') {
      page = <QuizPage />;
    } else if (this.state.currentPage === 'ScoreBoard') {
      page = <ScoreBoard />;
    }
    return (
      <div className="App" />
    );
  }
}

export default App;
