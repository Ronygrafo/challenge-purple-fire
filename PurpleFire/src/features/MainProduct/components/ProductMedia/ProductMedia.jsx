import { useState } from "react";
import "./ProductMedia.css";

const ProductMedia = ({ images }) => {
    const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  
    const handleThumbnailClick = (index) => {
      setSelectedThumbnail(index);
    };
  
    return (
      <div className="product-media">
        <div className="thumbnails-bar">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`thumbnail ${index === selectedThumbnail ? "selected" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="featured-image">
          <img
            src={images[selectedThumbnail].url}
            alt={images[selectedThumbnail].alt}
          />
        </div>
      </div>
    );
  };

export default ProductMedia;
