import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
