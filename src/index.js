import React from 'react';
import ReactDom from 'react-dom';

import { 
  CompA, CompB, Parent, FirstComponent, Elements, FamilySilva, Family, Member, 
  FunctionComponent, ChildPropagation 
} from './components/';

const root = document.getElementById('root');

ReactDom.render(<h1>Hello, React!</h1>, root);

ReactDom.render(
  <div>
    <FirstComponent value="First component with React!!"/>
    <CompA value="Yeah, I'm A!" />
    <CompB value="B on area, save!" />
    <Elements />
    <FamilySilva />
    <Family surname="Felix Pereira">
      <Member name="Joaquim" />
      <Member name="Mariana" />
    </Family>
    <Family>
      <Member name="Rafael" surname="Arruda" />
      <Member name="Rodolfo" surname="Arruda" />
    </Family>
    <ChildPropagation surname="Peaky Fucking Blinders">
      <Member name="Felix" />
      <Member name="Adorno" />
      <Member name="Theodor" />
      <Member name="Darymple" />
    </ChildPropagation>
    <FunctionComponent />
    
    <Parent />

  </div>
  , root);
