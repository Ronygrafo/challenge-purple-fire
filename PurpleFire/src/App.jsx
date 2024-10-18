/* eslint-disable no-unused-vars */

import "./App.css";
import IconButton from "./ui/components/IconButton/IconButton";
import PrimaryButton from "./ui/components/PrimaryButton/PrimaryButton";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const handleClick = () => {
  console.log("Clicked");
};
function App() {
  return (
    <>
      <PrimaryButton
        text="Buy Now"
        onClick={handleClick}
        className="primary-button"
      />
      <PrimaryButton
        text="Add to Cart"
        onClick={handleClick}
        className="secondary-button"
      />
      <IconButton
        text="Add to Cart"
        onClick={handleClick}
        className=""
        iconName="shopping_cart"
        iconPosition="left"
      />
    </>
  );
}

export default App;
