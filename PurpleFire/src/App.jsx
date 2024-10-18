/* eslint-disable no-unused-vars */

import "./App.css";
import IconButton from "./ui/components/needus/IconButton/IconButton";
import PrimaryButton from "./ui/components/needus/PrimaryButton/PrimaryButton";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import SuscribeInput from "./ui/components/needus/SuscribeInput/SuscribeInput";

const handleClick = () => {
  console.log("Clicked");
};
function App() {
  const handleSubscribe = async (email) => {
    console.log("suscribing", email);
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log("suscribe succesful", email);
  };

  return (
    <>
      <PrimaryButton
        text="Needus PDP"
        onClick={handleClick}
        className="primary-button"
      />
      <PrimaryButton
        text="Antic Landing Page"
        onClick={handleClick}
        className="secondary-button"
      />
      <hr/>
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
      <SuscribeInput
        onSubscribe={handleSubscribe}
        placeholder="Enter your email"
        buttonText="Subscribe"
      />
      </>
  );
}

export default App;
