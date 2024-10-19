/* eslint react/prop-types: 0 */

import ChipTag from "../../../../components/ChipTag/ChipTag";
import IconButton from "../../../../components/IconButton/IconButton";
import "./ProductCard.css";

const ProductCard = ({ image, imageAlt, label, title, price }) => {

  const handleClick = () => { console.log('Related Product Added');
  }

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        {label && (
          <div className="product-card__tag">
            <ChipTag text={label.text} type={label.type} />
          </div>
        )}
        <img src={image} alt={imageAlt} className="product-card__image" />
      </div>
      <div className="product-card__content">
        <IconButton
          text={"Add to Cart"}
          onClick={handleClick}
          className={""}
          iconName={"shopping_cart"}
          iconPosition={"left"}
        />
      </div>
      <h3 className="product-card__title">{title}</h3>
        <div className="product-card__price">
          <span className="product-card__current-price">
            ${price.current.toFixed(2)}
          </span>
          {price.original > price.current && (
            <span className="product-card__original-price">
              ${price.original.toFixed(2)}
            </span>
          )}
        </div>
    </div>
  );
};

export default ProductCard;
