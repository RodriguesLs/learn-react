import React from 'react';
import Child from './Child';

export default () => {

  const notifyExit = local => alert(`Allow ${local}`)

  return (
    <div>
      <Child notifyExit={notifyExit} />
    </div>
  )
}