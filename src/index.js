import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
// This file stores all reducers and our store

const feelingReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_FEELING') {
        let newState = action.payload;
        return newState;
    } else if (action.type === 'RESET') {
        return 0;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_UNDERSTANDING') {
        let newState = action.payload;
        return newState;
    } else if (action.type === 'RESET') {
        return 0;
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_SUPPORT') {
        let newState = action.payload;
        return newState;
    } else if (action.type === 'RESET') {
        return 0;
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'SUBMIT_COMMENT') {
        let newState = action.payload;
        return newState;
    } else if (action.type === 'RESET') {
        return '';
    }
    return state;
}

const startReducer = (state = false, action) => {
    if (action.type === 'START') {
        return true;
    } else if (action.type === 'RESET') {
        return false;
    }
    return state;
}

const adminReducer = (state = [], action) => {
    if (action.type === 'ADD_FEEDBACK') {
        return [...state, ...action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling: feelingReducer,
        understanding: understandingReducer,
        support: supportReducer,
        comments: commentReducer,
        start: startReducer,
        userData: adminReducer
    })
);



ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
