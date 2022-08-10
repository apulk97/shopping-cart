import React from "react";
import useProduct from "../../../utilities/useProduct";
import "./Home.scss";

import Carousel from "../../components/Carousel/Carousel";
import Section from "../../components/Section/Section";

const Home = () => {
  const { filteredCategories, onCategoryClick } = useProduct();

  return (
    <main className="home-container">
      <Carousel />
      {filteredCategories.map((item) => (
        <Section item={item} onCategoryClick={onCategoryClick} />
      ))}
    </main>
  );
};

export default Home;
