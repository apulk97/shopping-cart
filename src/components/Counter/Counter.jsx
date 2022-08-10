import React from "react";
import { connect } from "react-redux";
import "./Counter.scss";
import Button from "../Button/Button";
import { editCart, removeFromCart } from "../../redux/actions/actions";

const Counter = ({ quantity, price, id, stock, editCart, removeFromCart }) => {



  return (
    <div className="counter">
      <Button onClick={() => removeFromCart(id)} className={"counter__button"}>
        -
      </Button>
      <p className="counter__text">{quantity}</p>
      <Button
        onClick={() => editCart(id)}
        className={"counter__button"}
        disabled={stock === quantity}
      >
        +
      </Button>
      <p className="counter__multiply">&#10005;</p>
      <p className="counter__text">{price}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      editCart: (id) => dispatch(editCart(id)),
      removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(null, mapDispatchToProps)(Counter);
