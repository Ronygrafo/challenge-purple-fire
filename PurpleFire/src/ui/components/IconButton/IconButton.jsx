/* eslint react/prop-types: 0 */

import { MaterialSymbol } from "react-material-symbols";
import "./IconButton.css";

const IconButton = ({
  text,
  onClick = { onClick },
  className = "",
  iconName,
  iconPosition = "",
}) => {
  return (
    <button
      className={`icon-button ${className} icon-${iconPosition}`}
      onClick={onClick}
      aria-label={text}
    >
      <MaterialSymbol icon={iconName} size={24} grade={0} weight={300} />
      <span className="icon-button__text">{text}</span>
    </button>
  );
};

export default IconButton;
