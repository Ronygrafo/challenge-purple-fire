import { useState } from "react";
import Button from "../../../../components/Button/Button";
import ProductRating from "../ProductRating/ProductRating";
import "./ProductDataTable.css";

const ProductDataTable = ({ productData }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const handleClick = () => {
    console.log("Click Size");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleQuantityClick = () => {
    console.log("Quantity");
  };

  const handleSizeSelect = (index) => {
    setSelectedSizeIndex(index);
    handleClick();
  };

  return (
    <div className="product-data">
      <table>
        <tbody>
          <tr>
            <td>Brand:</td>
            <td>{productData.product.brand}</td>
          </tr>
          <tr>
            <td>Model:</td>
            <td>{productData.product.model}</td>
          </tr>
          <tr>
            <td>Availability:</td>
            <td>{productData.product.availability}</td>
          </tr>
        </tbody>
      </table>

      <h1>{productData.product.name}</h1>

      <ProductRating />

      <ul className="features">
        {productData.product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="sizes">
        {productData.product.sizes.map((size, index) => (
          <Button
            key={index}
            text={`${size.cm} cm (${size.inches}")`}
            onClick={() => handleSizeSelect(index)}
            className={`secondary-button ${
              index === selectedSizeIndex ? "" : "button--not-selected"
            }`}
          />
        ))}
      </div>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="product-handler">
          <div className="price-container">
            <p className="price-label">USD(incl. of all taxes)</p>
            <div className="price-display">
              <span className="current-price">
                ${productData.product.price.current.toFixed(2)}
              </span>
              <span className="original-price">
                ${productData.product.price.original.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="quantity-selector">
            <button type="button" onClick={handleQuantityClick}>
              -
            </button>
            <input type="number" readOnly />
            <button type="button" onClick={handleQuantityClick}>
              +
            </button>
          </div>
        </div>

        <div className="button-container">
          <Button
            text="Buy Now"
            onClick={handleSubmit}
            className="primary-button"
          />
          <Button
            text="Add to Cart"
            onClick={handleSubmit}
            className="secondary-button"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductDataTable;
