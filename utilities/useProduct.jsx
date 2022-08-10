import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import Categories from "../server/categories/index.get.json";
import ProductsList from "../server/products/index.get.json";

const useProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  const filteredCategories = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const onCategoryClick = (categoryid) => {
    if (categoryid) {
      navigate(`/products/${categoryid}`);
    } else {
      navigate("/products");
    }
  };

  useEffect(() => {
    if (id) {
      const selectedCategory = ProductsList.filter(
        (item) => item.category === id
      );
      console.log(selectedCategory, id);
      setProducts(selectedCategory);
    } else {
      setProducts(ProductsList);
    }
  }, [location]);

  return {
    filteredCategories,
    onCategoryClick,
    products,
  };
};

export default useProduct;
