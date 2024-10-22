import { useState } from "react";
import useProductData from "../../hooks/useProductData";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ProducDetails from "../../features/MainProduct/components/ProductDetails/ProductDetails";
import PoductRating from "../../features/MainProduct/components/ProductRating/ProductRating";
import "./MainProduct.css";
import ProductMedia from "./components/ProductMedia/ProductMedia";

const handleClick = () => {
  console.log("Click Size");
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};

const MainProduct = () => {
  const { productData, loading, error } = useProductData();
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
  };

  if (loading) return <div className="fetching-message">Loading Product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productData) return <div>No product data available</div>;

  console.log(productData);

  return (
    <section>
      <div className="product-main full-width">
      <ProductMedia images={productData.product.images}/>
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

          <PoductRating />

          <ul className="features">
            {productData.product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="sizes">
            {productData.product.sizes.map((size, index) => (
              <PrimaryButton
                key={index}
                text={`${size.cm} cm (${size.inches}")`}
                onClick={() => handleClick}
                className={`secondary-button ${
                  size.selected ? "selected" : ""
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
                <button type="button">-</button>
                <input type="number" readOnly />
                <button type="button">+</button>
              </div>
            </div>

            <div className="button-container">
              <PrimaryButton
                text="Buy Now"
                onClick={handleSubmit}
                className="primary-button"
              />
              <PrimaryButton
                text="Add to Cart"
                onClick={handleSubmit}
                className="secondary-button"
              />
            </div>
          </form>
        </div>
      </div>
      <ProducDetails
        description={productData.product.description}
        specification={productData.product.specification}
        reviews={productData.product.reviews}
      />
    </section>
  );
};

export default MainProduct;
