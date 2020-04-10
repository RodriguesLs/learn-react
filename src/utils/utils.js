import React from 'react';

export const parentPropagation = (props) =>
  React.Children.map(
    props.children, child => React.cloneElement(child, {...props})
  )