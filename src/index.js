import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stopwatch from './components/stopwatch/stopwatch';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Stopwatch />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
