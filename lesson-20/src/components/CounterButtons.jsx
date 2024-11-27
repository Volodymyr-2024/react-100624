import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function CounterButtons() {
  const dispatch = useDispatch();

  function handleIncrmenent() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div>
      <button onClick={handleIncrmenent}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
