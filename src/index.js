import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";  //step 1
import { legacy_createStore as createStore} from 'redux';  //step 3
import rootReducer from './reducers/rootReducer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);  //step 4
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/*step 2 */}
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


