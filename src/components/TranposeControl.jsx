import { FaTimesCircle, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import ControlButton from "./ControlButton";
import { useTransposeContext } from "../context/TransposeContext";

export function TransposeControl() {
  const { semitones, reset, decrement, increment } = useTransposeContext();
  const isUnison = semitones === 0;

  return (
    <div className="flex space-x-2 items-center">
      <span className="text-gray-500 text-sm">Transpose</span>

      <ControlButton onClick={reset} disabled={isUnison}>
        <FaTimesCircle className="w-8 h-8" />
      </ControlButton>
      <ControlButton onClick={decrement}>
        <FaMinusCircle className="w-8 h-8" />
      </ControlButton>
      <div className="text-md w-6 text-center">{semitones}</div>
      <ControlButton onClick={increment}>
        <FaPlusCircle className="w-8 h-8" />
      </ControlButton>
    </div>
  );
}
