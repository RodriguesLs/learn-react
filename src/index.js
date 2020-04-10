import React from 'react';
import ReactDom from 'react-dom';
import FirstComponent from './components/FirstComponent';
import { CompA, CompB } from './components/TwoComponents';
import Elements from './components/MultiElements';

const root = document.getElementById('root');

ReactDom.render(<h1>Hello, React!</h1>, root);

ReactDom.render(
  <div>
    <FirstComponent value="First component with React!!"/>
    <Elements />
    <CompA value="Yeah, I'm A!" />
    <CompB value="B on area, save!" />
  </div>
  , root);
