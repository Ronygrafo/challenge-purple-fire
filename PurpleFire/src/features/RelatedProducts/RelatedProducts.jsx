import ProductCard from './components/ProductCards/ProductCard'
import useRelatedProductData from "../../hooks/useRelatedProductData";
import './RelatedProducts.css'

const RelatedProducts = () => {
    const { productData, loading, error } = useRelatedProductData();

    if (loading) return <div>Loading Products...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!productData || productData.length === 0) return <div>No product data available</div>;

    return (
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
    );
}

export default RelatedProducts