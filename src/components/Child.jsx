import React from 'react';

export default props =>
  <div>
    <button onClick={() => props.notifyExit('Shopping')}>
      I'm go out.
    </button>
  </div>