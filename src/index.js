import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './redux/sagas';
import myFirstReducer from './redux/reducer';
import Header from './compoents/Header';

const sageMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer, applyMiddleware(sageMiddleware));
sageMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Header />
    </Provider>
  </React.StrictMode>
);
