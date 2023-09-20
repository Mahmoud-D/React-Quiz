import { useReducer } from "react";
const inisialState = { count: 0, step: 1 };

function reducer(state, action) {
  const dec = (inisialState) => {
    if (inisialState !== 0) {
      state.count - state.step;
    }
  };
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, count: action.payload };
    case "reset":
      return inisialState;
    default:
      throw new Error(" Unknown action");
  }
}

function DateCounter() {
  //   const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, inisialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  //   date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", paylosd: -1 });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", paylosd: +1 });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />*
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
