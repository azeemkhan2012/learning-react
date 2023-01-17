import React from "react";

const Uzair = () => {
  const handleClick = () => {
    alert("Sliped!");
  };

  return (
    <div className="contain2" onClick={handleClick}>
      Hello UZAIR BRO!
    </div>
  );
};

export default Uzair
