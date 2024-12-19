import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { compose, createStore, applyMiddleware } from 'redux';

import { socketMiddleware } from './services/middleware/socket-middleware';

import { rootReducer } from './services/reducers/index';

import { Provider } from 'react-redux';

import { thunk } from 'redux-thunk';

import { IntlProvider } from 'react-intl';


////////////////////////-------------------------------////////////////////////////


import { WS_CONNECTION_START } from './services/actions/socket-orders';
import { WS_GET_ORDERS } from './services/actions/socket-orders';

import { WS_USER_CONNECTION_START } from './services/actions/user-socket-orders';
import { WS_USER_GET_ORDERS } from './services/actions/user-socket-orders';


export type TWSStoreActionsOrders = {
  wsInit: typeof  WS_CONNECTION_START,
  onMessage: typeof  WS_GET_ORDERS,

};

export type TWSStoreActionsUserOrders = {
  wsInit: typeof  WS_USER_CONNECTION_START,
  onMessage: typeof  WS_USER_GET_ORDERS,

};


const wsOrderActions: TWSStoreActionsOrders = {
  wsInit: WS_CONNECTION_START,
  onMessage: WS_GET_ORDERS
  
};


const wsUserOrderActions: TWSStoreActionsUserOrders = {
  wsInit: WS_USER_CONNECTION_START,
  onMessage: WS_USER_GET_ORDERS
  
};




/////////////////////////////////-----------------------//////////////////////////



//const accessToken = (String(localStorage.getItem('accessToken')).split(' '))[1];

const composeEnhancers =
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsOrderActions),
    socketMiddleware(wsUserOrderActions)
  )
);

export const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <IntlProvider locale='ru'>

      <App />

      </IntlProvider>
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
