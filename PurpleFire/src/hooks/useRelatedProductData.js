/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import mockRelatedProductData from '../mockData/mockRelatedProducts.json';

const useProductData = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        setProductData(mockRelatedProductData);
        setLoading(false);
      } catch (err) {
        setError('Error loading product data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { productData, loading, error };
};

export default useProductData;