import React, { useState } from 'react';

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {props.label}
    </label>
  );
}

export default Checkbox;