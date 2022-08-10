import React, { useContext } from "react";
import { handleCart } from "../../redux/actions/actions";
import { connect } from "react-redux";
import Button from "../Button/Button";
import CardTablet from "../CartTablet/CardTablet";
import "./CartModal.scss";

const CartModal = ({ myCart, handleCart }) => {
  const count = Object.keys(myCart).length
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className="cartmodal__section">
      <div className="cartmodal__section__heading">
        <h1 className="cartmodal__section__heading__title">
          My Cart ({countItems})
        </h1>
        <Button
          className={"cartmodal__section__heading__button"}
          onClick={() => handleCart(false)}
        >
          &#10005;
        </Button>
      </div>
      <CardTablet
        className={"cartmodal__section__flex"}
        count={count}
        products={myCart}
      />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
      myCart: state.myCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleCart: (open) => dispatch(handleCart(open))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
