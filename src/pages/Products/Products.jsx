import React from "react";
import "./Products.scss";

import useProduct from "../../../utilities/useProduct";
import useWindowDimensions from "../../../utilities/useWindowDimensions";
import Card from "../../components/Card/Card";
import Dropdown from '../../components/Dropdown/Dropdown'

const Products = () => {
  const { onCategoryClick, filteredCategories, products } = useProduct();
  const { width } = useWindowDimensions();
  console.log({width})

  return (
    <div className="product-container">
      {width < 481 ? (
        <Dropdown items={filteredCategories} onCategoryClick={onCategoryClick} />
      ) : (
        <div className="product-container__categories">
          {filteredCategories.map((item) => (
            <p
              key={item.name}
              onClick={() => onCategoryClick(item.id)}
              className="product-container__categories__unit"
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
      <div className="product-container__items">
        {products && products.map((item) => <Card item={item} />)}
      </div>
    </div>
  );
};

export default Products;
