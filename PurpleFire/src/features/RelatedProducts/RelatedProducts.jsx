import ProductCard from "./components/ProductCards/ProductCard";
import useRelatedProductData from "../../hooks/useRelatedProductData";
import "./RelatedProducts.css";
import SliderButtons from "./components/SliderButtons/SliderButtons";

const RelatedProducts = () => {
  const { productData, loading, error } = useRelatedProductData();

  if (loading) return <div>Loading Products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productData || productData.length === 0)
    return <div>No product data available</div>;

  return (
    <section>
      <div className="related-products">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            imageAlt={product.imageAlt}
            label={product.label}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <SliderButtons />
    </section>
  );
};

export default RelatedProducts;
