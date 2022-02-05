import React, { useEffect } from 'react';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {
  
  useEffect(() => {

  }, []);
// This is the structure of the app. Routes are set up to guide the user from page to page.
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
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
