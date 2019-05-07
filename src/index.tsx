import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxThunk from 'redux-thunk'
import { applyMiddleware, createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducers from "./reducers";

const store: Store = createStore(
    rootReducers,
    applyMiddleware(reduxThunk)
);

const element = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
