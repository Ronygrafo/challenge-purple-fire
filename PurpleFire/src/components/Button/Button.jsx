 

import "./Button.css";

const Button = ({ text, onClick, className = "" }) => {
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

export default Button;
