import React from "react";
import { useSelector } from "react-redux";

export default React.memo(function CounterNumber() {
  const counterValue = useSelector((state) => state.counter.value);
  return <div>{counterValue}</div>;
});
