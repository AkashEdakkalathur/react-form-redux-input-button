import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import FeedbackForm from'./containers/FeedbackForm'
import {Tabular} from'./components/Tabular'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducer from './store/feedbackReducer'

const store = createStore(reducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      
        <Provider store={store}>
      
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <FeedbackForm/>
     <Tabular/>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
