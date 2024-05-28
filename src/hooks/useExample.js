import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/example/exampleSlice";

export const useExample = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.example.value);

  const incrementValue = () => {
    dispatch(increment());
  };

  const decrementValue = () => {
    dispatch(decrement());
  };

  return { value, incrementValue, decrementValue };
};
