/* eslint-disable no-unused-vars */

import "./App.css";
import PrimaryButton from "./ui/components/needus/PrimaryButton/PrimaryButton";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const handleClick = () => {
  console.log("Clicked");
};
function App() {

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

      </>
  );
}

export default App;
