import React from 'react';

export default props => 
<div>
  {React.Children.map(
    props.children, child => React.cloneElement(child, { ...props })
  )}
</div>



// export default props =>
//   <div>
//     <h1>Family</h1>
//     {props.children}
//   </div>