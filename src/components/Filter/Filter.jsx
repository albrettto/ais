import React, { useState } from "react";
import "./Filter.css";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter">
      <button onClick={() => setIsOpen(!isOpen)} className="filter__button">
        Technologies
      </button>
    </div>
  );
}