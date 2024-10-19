import { useEffect, useState } from "react";
import "./MainProduct.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { MaterialSymbol } from "react-material-symbols";

const handleClick = () => {
  console.log("Click");
};

const handleBuyNow = () => {
  console.log("Buy Now!");
};

const handleAddToCart = () => {
  console.log("Add To Cart");
};

const MainProduct = () => {
  const [productData, setProductData] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "../../../../../public/mockData/mockProduct.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!productData) return <div>Loading Product...</div>;

  console.log(productData);

  return (
    <section>
      <div className="product-main full-width">
        <div className="product-media">
          <div className="thumbnails-bar">
            {productData.product.images.map((image, index) => (
              <div
                key={image.id}
                className={`thumbnail ${
                  index === selectedThumbnail ? "selected" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </div>
          <div className="featured-image">
            <img
              src={productData.product.images[0].url}
              alt={productData.product.images[0].alt}
            />
          </div>
        </div>

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

          <div className="product-ratings">
            <MaterialSymbol
              icon={"star_rate"}
              size={24}
              grade={0}
              weight={400}
              color={"#E73C17"}
              fill={true}
            />
            <MaterialSymbol
              icon={"star_rate"}
              size={24}
              grade={0}
              weight={400}
              color={"#E73C17"}
              fill={true}
            />
            <MaterialSymbol
              icon={"star_rate"}
              size={24}
              grade={0}
              weight={400}
              color={"#E73C17"}
              fill={true}
            />
            <MaterialSymbol
              icon={"star_rate_half"}
              size={24}
              grade={0}
              weight={400}
              color={"#E73C17"}
              fill={false}
            />
            <MaterialSymbol
              icon={"star_rate"}
              size={24}
              grade={0}
              weight={400}
              color={"#ccc"}
              fill={false}
            />
          </div>

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
          <form className="product-form">
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
                onClick={handleBuyNow}
                className="primary-button"
              />
              <PrimaryButton
                text="Add to Cart"
                onClick={handleAddToCart}
                className="secondary-button"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainProduct;
