import useProductData from "../../hooks/useProductData";
import ProducDetails from "../../features/MainProduct/components/ProductDetails/ProductDetails";
import "./MainProduct.css";
import ProductMedia from "./components/ProductMedia/ProductMedia";
import ProductDataTable from "./components/ProductDataTable/ProductDataTable";

const MainProduct = () => {
  const { productData, loading, error } = useProductData();

  if (loading)
    return <div className="fetching-message">Loading Product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productData) return <div>No product data available</div>;

  console.log(productData);

  return (
    <section>
      <div className="product-main full-width">
        <ProductMedia images={productData.product.images} />
        <ProductDataTable productData={productData} />
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
