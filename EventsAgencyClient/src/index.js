import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Route} from 'react-router-dom'
import App from './components/App';
import reducers from './redux/reducers/reducers';
import Home from './components/Home'
const store=createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
   <App />
    </Provider>,
    document.querySelector('#root')
)