/* eslint react/prop-types: 0 */

import "./CategoryBanner.css";

const CategoryBanner = ({ title, breadcrumbs }) => {
  return (
    <section className="category-banner full-width">
      <div className="category-banner-content">
      <h2 className="category-title">{title}</h2>
      <ul className="breadcrumbs">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && <span className="separator">/</span>}
            {crumb}
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default CategoryBanner;
