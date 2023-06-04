import { useSelector, useDispatch } from "react-redux";
import { addCounter, decrCounter } from "../redux/actions/action";

const Counter = () => {
  const value = useSelector((state) => state.counter);
  console.log(value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter : {value}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(addCounter());
        }}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(decrCounter());
        }}
      >
        -1
      </button>
    </>
  );
};
export default Counter;
