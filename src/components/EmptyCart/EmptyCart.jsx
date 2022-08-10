import React from "react";
import { connect } from "react-redux";
import "./EmptyCart.scss";
import Button from "../Button/Button";
import { handleCart } from "../../redux/actions/actions";

const EmptyCart = ({ handleCart }) => {

  return (
    <section className="empty-cart">
      <div className="empty-cart__sub-container">
        <h2 className="empty-cart__sub-container__title">
          No items in your cart
        </h2>
        <p className="empty-cart__sub-container__text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart__footer">
        <Button
          className={"empty-cart__footer__start-button"}
          onClick={() => handleCart(false)}
        >
          Start Shopping
        </Button>
      </footer>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleCart: (open) => dispatch(handleCart(open))
  }
}

export default connect(null, mapDispatchToProps)(EmptyCart);
