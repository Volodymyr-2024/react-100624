import { multiply, divide } from "../utils/UsefulFunctions";

function ShowCalc() {
  const divideResult = divide(10, 2);

  return (
    <div>
      <p>{multiply(4, 3)}</p>
      <p>{divideResult}</p>
    </div>
  );
}

export default ShowCalc;
