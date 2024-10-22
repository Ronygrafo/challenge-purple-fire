import { useState } from "react";
import "./ProductMedia.css";

const ProductMedia = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="product-media-error">No product images available</div>
    );
  }

  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const selectedImage = images[selectedThumbnail];

  const handleThumbnailClick = (index) => {
    if (index !== selectedThumbnail && index >= 0 && index < images.length) {
      setSelectedThumbnail(index);
    }
  };

  const renderThumbnails = () => (
    <div className="thumbnails-bar" role="list">
      {images.map((image, index) => (
        <div
          key={image.id}
          role="button"
          tabIndex={0}
          className={`thumbnail ${
            index === selectedThumbnail ? "selected" : ""
          }`}
          onClick={() => handleThumbnailClick(index)}
          aria-label={`View ${image.alt}`}
          aria-selected={index === selectedThumbnail}
        >
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );

  const renderFeaturedImage = () => (
    <div className="featured-image" aria-live="polite">
      <img
        src={selectedImage.url}
        alt={selectedImage.alt}
        aria-label="Selected product view"
      />
    </div>
  );

  return (
    <div className="product-media">
      {renderThumbnails()}
      {renderFeaturedImage()}
    </div>
  );
};

export default ProductMedia;
