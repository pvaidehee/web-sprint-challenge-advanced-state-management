import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './reducers/reducer';

import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
);

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
<Router> <App /> </Router>
</Provider>,
rootElement
);