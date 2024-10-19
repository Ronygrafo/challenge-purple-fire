/* eslint react/prop-types: 0 */

import './ChipTag.css'

const ChipTag = ({ text, type }) => {
    return (
      <span className={`chip-tag chip-tag--${type}`}>
        {text}
      </span>
    );
  };

export default ChipTag