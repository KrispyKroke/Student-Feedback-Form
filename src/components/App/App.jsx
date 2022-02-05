import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {
  

  useEffect(() => {

  },[]);

  return (
    <Router>
      <div className='App'>
        <WelcomeScreen />
        <Route path="/feeling">
          <FeelingForm />
        </Route>
        <Route path="/understanding">
          <UnderstandingForm />
        </Route>
        <Route path="/support">
          <SupportForm />
        </Route>
        <Route path="/comments">
          <CommentsForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
