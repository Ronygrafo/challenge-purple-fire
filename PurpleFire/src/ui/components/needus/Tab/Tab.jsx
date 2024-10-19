/* eslint react/prop-types: 0 */

import "./Tab.css";

const Tab = ({ text, isSelected, onClick }) => {
    return (
      <button
        className={`tab ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
        aria-label={text}
        aria-selected={isSelected}
      >
        {text}
      </button>
    );
  };

export default Tab;
