import React from 'react';

function CBadge(props) {
  const { variant, children } = props;

  return (
    <span
      style={{
        backgroundColor: variant,
        
        // create a circle
        borderRadius: '50%',
        height: '0.1rem',
        width: '0.1rem',
        // set the margin
        margin: '0 0rem',
        // set the padding
        padding: '0 0.5rem',
        position:'relative',
        color:'white',
        top:'-1rem',

      }}
    >
      {children}
    </span>
  );
}

export default CBadge;