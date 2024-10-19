import './SliderButtons.css'
import { MaterialSymbol } from "react-material-symbols";

const SliderButtons = () => {
  return (
    <div className="full-width slider-control">
      <MaterialSymbol
        icon={"fiber_manual_record"}
        size={24}
        grade={0}
        weight={400}
        color={"var(--primary-red)"}
        fill={true}
      />
      <MaterialSymbol
        icon={"fiber_manual_record"}
        size={24}
        grade={0}
        weight={400}
        color={"#ccc"}
        fill={false}
      />
      <MaterialSymbol
        icon={"fiber_manual_record"}
        size={24}
        grade={0}
        weight={400}
        color={"#ccc"}
        fill={false}
      />
    </div>
  );
};

export default SliderButtons;
