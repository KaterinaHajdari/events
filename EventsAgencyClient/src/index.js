import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';


import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './redux/reducers';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,{login:{values:{id:0}}}, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)