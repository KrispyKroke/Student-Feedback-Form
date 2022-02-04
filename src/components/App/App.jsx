import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Reflection Time!</h1>
        </header>
        <FeelingForm />
        <UnderstandingForm />
        <SupportForm />
        <CommentsForm />
      </div>
    </Router>
  );
}

export default App;
