import React from 'react';
import './Section.scss'

import Button from '../Button/Button';

const Section = ({ item, onCategoryClick }) => {
    let imageName = item.imageUrl.split("/").splice(-1)[0].slice(0, -4);
    return (
        <div className="categories-box">
        <div className="categories-box__container">
          {item.order % 2 !== 0 ? (
            <>
              <img
                src={require("../../../static/images/category/" +
                  imageName +
                  ".png")}
                alt={item.name}
                className="categories-box__container__image"
              />
              <div className="categories-box__container__utilities">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <Button onClick={() => onCategoryClick(item.id)}>{`Explore ${item.key}`}</Button>
              </div>
            </>
          ) : (
            <>
              <div className="categories-box__container__utilities">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <Button onClick={() => onCategoryClick(item.id)}>{`Explore ${item.key}`}</Button>
              </div>
              <img
                src={require("../../../static/images/category/" +
                  imageName +
                  ".png")}
                alt={item.name}
                className="categories-box__container__image"
              />
            </>
          )}
        </div>
      </div>
    );
};

export default Section;