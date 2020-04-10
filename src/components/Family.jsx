import React from 'react';
import { parentPropagation } from '../utils/utils';

export default props => 
  <div>
    <h3>Family</h3>

    {React.Children.map(
      props.children, child => React.cloneElement(child, { ...props })
    )}
  </div>

export const ChildPropagation = (props) => 
  <div>
    <h1>What?</h1> 
    { parentPropagation(props) } 
  </div>


// export default props =>
//   <div>
//     <h1>Family</h1>
//     {props.children}
//   </div>