 

import "./ProductTab.css";

const ProductTab = ({ text, isSelected, onClick }) => {
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

export default ProductTab;
