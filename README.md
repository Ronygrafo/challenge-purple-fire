# Needus - Product Detail Page
![Product-Detail-Page-Banner](https://github.com/user-attachments/assets/67db2e4e-bcf8-439e-848d-6dfb61bd0739)



## 📋 Table of Contents

1. [Overview](#overview)
2. [Live Demo](#live-demo)
3. [Technologies Used](#technologies-used)
4. [Architecture](#architecture)
  - [Project Structure](#project-structure-explanation)
  - [Directory Organization](#directory-organization)
5. [Features](#features)
  - [Responsive Breakpoints](#responsive-breakpoints)
6. [Development Decisions](#development-decisions)
7. [Styling Approach](#styling-approach)
8. [Acknowledgments](#acknowledgments)

## 📺 Overview
This project implements a product detail page within an e-commerce platform. It features a custom API simulation using React custom hooks that process JSON data to render essential product information. The page emphasizes product imagery and detailed specifications through an intuitive user interface.

-Key features:

- Dynamic product data rendering through custom hooks
- JSON-based API simulation


## 🚀 Live Demo
- [View Live Site](https://challenge-purple-fire.vercel.app/)
    - [Figma Prototype (Desktop)](https://www.figma.com/proto/23iDxcUBoDZMYEtYwNLpbM/%F0%9F%93%9D-Challenge?page-id=0%3A1&type=design&node-id=36-680&viewport=-455%2C1070%2C0.38&t=wQLMEU6uJaUaNpsj-1&scaling=min-zoom&starting-point-node-id=1%3A19)
    - [Figma Prototype (Mobile)](https://www.figma.com/proto/23iDxcUBoDZMYEtYwNLpbM/%F0%9F%93%9D-Challenge?page-id=10%3A48&type=design&node-id=36-479&viewport=-48%2C1623%2C0.56&t=l7KicZNjWxfkjOCP-1&scaling=scale-down&starting-point-node-id=10%3A49)

## 💻 Technologies Used
### Core Technologies
- React 18.3.1
- React DOM 18.3.1

### Build Tools
- Vite 5.4.8

### UI Components & Features
- React Material Symbols 4.4.0

### Code Quality & Linting
- ESLint 9.11.1


## 🏗️ Architecture
The project follows a sensible folder structure:

![pdp-tree](https://github.com/user-attachments/assets/726ecb8b-20e7-497f-ac3a-c2cf97438629)


## Project Structure Explanation:
### Directory Organization
#### 🧩 Components
- Modular, reusable UI components
- Self-contained component directories
- Each component includes corresponding CSS and JSX files

#### 🪝 Hooks
- Custom hooks simulating backend API calls using Promises and Timeouts
- useProductData: Manages individual product data fetching
- useRelatedProductData: Handles related products data retrieval

#### 💾 mockData
- JSON data storage
- Single product detailed information
- Related products array with reference products

#### 🔧 Features
- Feature-specific component containers
- API calls are handled at this level for better data management and component isolation
- Isolated feature directories
- **MainProduct:** Complex feature with dedicated subcomponents
- **RelatedProducts:** Product recommendation section

#### 📄 Pages
- Contains page-level components
- Currently includes the ProductDetailPage component
- Serves as container for feature composition

#### ⚙️ Root Level
- Handles app initialization
- Contains global styles and configurations
- Main entry point for the application

## 🎯 Features
Implemented Features

- ✅ Fully responsive design (mobile and desktop)
- ✅ Dynamic product data rendering through custom hooks
- ✅ JSON-based API simulation
- ✅ Newsletter subscription

## Responsive Breakpoints
- ### 📱 mobile: '320px - 768px',
- ### 💻 desktop: '1025px and above'
<!-- Paste screenshots -->


## 💡 Development Decisions
The project implements custom hooks to simulate API calls, providing a clean separation between data fetching logic and component rendering.
This approach allows for better code organization and reusability.

###  Custom Hook Implementation Usage Example:
```javascript
// Custom Hook: useProductData
import { useState, useEffect } from 'react';
import mockProductData from '../mockData/mockProduct.json';

const useProductData = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setProductData(mockProductData);
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

```
```javascript
const MainProduct = () => {
  const { productData, loading, error } = useProductData();

  if (loading) return <div className="fetching-message">Loading Product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productData) return <div>No product data available</div>;

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

```

## 🖌️ Styling Approach:

### CSS Architecture

- Plain CSS with global styles in index.css
- Custom color palette using CSS variables
- BEM methodology for consistent class naming

### Icon System

- React Material Symbols 4.4.0 integration
- Access to Google's extensive Material Design icons
- The project implements plain CSS on global styles in index.css with:

<!-- Paste screenshots -->

## 🙏 Acknowledgments:

- Icons provided by [Material Symbols](https://fonts.google.com/icons)
