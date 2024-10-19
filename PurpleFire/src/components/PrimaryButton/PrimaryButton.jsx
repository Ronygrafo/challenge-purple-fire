/* eslint react/prop-types: 0 */

import "./PrimaryButton.css";

const PrimaryButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
