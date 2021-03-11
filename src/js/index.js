import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from '~/components/main';
import store from '~/store';
import '../scss/main.scss';

window.DEBUG = {
  getState: store.getState,
  dispatch: store.dispatch,
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
