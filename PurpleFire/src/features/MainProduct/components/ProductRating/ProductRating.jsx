import "./ProductRating.css";
import { MaterialSymbol } from "react-material-symbols";

const ProductRating = () => {
  return (
    <div className="product-ratings">
      <MaterialSymbol
        icon={"star_rate"}
        size={24}
        grade={0}
        weight={400}
        color={"var(--primary-red)"}
        fill={true}
      />
      <MaterialSymbol
        icon={"star_rate"}
        size={24}
        grade={0}
        weight={400}
        color={"var(--primary-red)"}
        fill={true}
      />
      <MaterialSymbol
        icon={"star_rate"}
        size={24}
        grade={0}
        weight={400}
        color={"var(--primary-red)"}
        fill={true}
      />
      <MaterialSymbol
        icon={"star_rate_half"}
        size={24}
        grade={0}
        weight={400}
        color={"var(--primary-red)"}
        fill={false}
      />
      <MaterialSymbol
        icon={"star_rate"}
        size={24}
        grade={0}
        weight={400}
        color={"#ccc"}
        fill={false}
      />
    </div>
  );
};

export default ProductRating;
