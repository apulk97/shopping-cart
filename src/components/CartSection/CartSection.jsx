import React from "react";
import "./CartSection.scss";
import Counter from "../Counter/Counter";

export default function CartSection({ product }) {
  const totalPrice = product?.quantity * product?.price;
  let folderName = product?.imageUrl.split('/').splice(-2)[0]
  let imageName = product?.imageUrl.split('/').splice(-1)[0].slice(0,-4)

  return (
    <section className="cart-section">
      <img
        src={require('../../../static/images/products/' + folderName + '/' + imageName + '.jpg')}
        alt={`Image of ${product?.name}`}
        className="cart-section__image"
      />
      <h2 className="cart-section__title">{product?.name}</h2>
      <Counter
        id={product?.id}
        quantity={product?.quantity}
        price={product?.price}
        stock={product?.stock}
      />
      <p className="cart-section__totalprice">Rs.{totalPrice}</p>
    </section>
  );
}
