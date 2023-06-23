import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <span>{count}</span>
    </>
  );
};

export default Counter;
