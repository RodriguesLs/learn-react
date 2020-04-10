import React from 'react';
import ReactDom from 'react-dom';
import FirstComponent from './components/FirstComponent';

const root = document.getElementById('root');
ReactDom.render(<h1>Hello, React!</h1>, root);
ReactDom.render(
  <div>
    <FirstComponent />
  </div>
  , root);
