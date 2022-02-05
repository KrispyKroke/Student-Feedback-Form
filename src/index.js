import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const feelingReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_FEELING') {
        let newState = action.payload;
        return newState;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_UNDERSTANDING') {
        let newState = action.payload;
        return newState;
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_SUPPORT') {
        let newState = action.payload;
        return newState;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling: feelingReducer,
        understanding: understandingReducer,
        support: supportReducer
    })
);



ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
