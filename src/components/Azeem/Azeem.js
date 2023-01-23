import React, { useState, useEffect, useMemo } from "react";

const Azeem = () => {
  const [count, setCount] = useState({ num: 0, name: "azeem" });
  let total = useMemo(() => {
    let num = 10;
    if (count.num === 5) {
      num = num + count.num;
    }
    return num;
  }, [count]);

  const handleAdd = (a) => {
    if (a) {
      setCount({ ...count, num: count.num + 1 });
    } else {
      setCount({ ...count, num: count.num - 1 });
    }
  };

  useEffect(() => {
    if (count.num === 5) {
      alert("tadda");
    }
  }, [count]);

  return (
    <div className="container">
      <h1>{count.name}</h1>
      <button onClick={() => handleAdd(null)}>-</button>
      <h1>{count.num}</h1>
      <h1>{total}</h1>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default Azeem;
