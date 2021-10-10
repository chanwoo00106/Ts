import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);