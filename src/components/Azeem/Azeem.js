import React from "react";
import Uzair from "../Uzair/Uzair";

const Azeem = () => {
  const handleClick = () => {
    alert("Clicked!");
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const printname = () => {
    let arr = []
    for (let i = 0; i <= 4; i++) {
      arr.push( <Uzair key={`uzair-${i}`} />);
    }
    return arr;
  };

  return (
    <div className="container">
      <div className="contain1">
        <h1 onClick={handleClick}>Hello Azeem!</h1>
      </div>
      {
        // printname()
      arr.map((item, i) => {
        return <Uzair key={`uzair-${i}`} />;
      })
      }
    </div>
  );
};

export default Azeem;
