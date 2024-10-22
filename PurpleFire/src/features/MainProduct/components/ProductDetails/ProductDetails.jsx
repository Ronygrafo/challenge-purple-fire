 

import { useState } from 'react';
import './ProductDetail.css'
import ProductTab from '../ProductTab/ProductTab';

const ProducDetails = ({ description, specification, reviews }) => {
    const [activeTab, setActiveTab] = useState('description');

    const renderContent = () => {
      switch (activeTab) {
        case 'description':
          return <p>{description}</p>;
        case 'specification':
          return <p>{specification}</p>;
        case 'reviews':
          return <p>{reviews}</p>;
        default:
          return null;
      }
    };
  
    return (
      <section className="product-tabs full-width">
        <div className="tabs">
        <ProductTab
          text="Description"
          isSelected={activeTab === 'description'}
          onClick={() => setActiveTab('description')}
        />
        <ProductTab
          text="Specification"
          isSelected={activeTab === 'specification'}
          onClick={() => setActiveTab('specification')}
        />
        <ProductTab
          text="Reviews"
          isSelected={activeTab === 'reviews'}
          onClick={() => setActiveTab('reviews')}
        />
        </div>
        <div className="tab-content">
          {renderContent()}
        </div>
      </section>
    );
  };

export default ProducDetails