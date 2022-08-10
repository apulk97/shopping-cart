import React from "react";
import "./Card.scss";
import { connect } from "react-redux";
import Button from "../Button/Button";
import { addToCart, editCart } from "../../redux/actions/actions";
import { useMediaQuery } from "../../../utilities/useMediaQuery";

const Card = ({ item, addToCart, editCart, myCart }) => {
  let folderName = item.imageURL.split("/").splice(-2)[0];
  let imageName = item.imageURL.split("/").splice(-1)[0].slice(0, -4);

  const browserWidth = useMediaQuery("(max-width: 480px)");

  const modifyCart = () => {
    if (!myCart[item.id]) {
      addToCart({
        [item.id]: {
          id: item.id,
          imageUrl: item.imageURL,
          name: item.name,
          price: item.price,
          stock: item.stock,
          quantity: 1,
        },
      });
    } else {
      editCart(item.id);
    }
  };

  {
   return browserWidth ? (
      <div className="card-container">
        <h2 className="heading">{item.name}</h2>
        <div className="card-container__description">
          <img
            src={require("../../../static/images/products/" +
              folderName +
              "/" +
              imageName +
              ".jpg")}
            alt={item.name}
            className="card-container__image"
          />
          <p className="card-container__text">{item.description}</p>
        </div>

        <div className="buy-section">
          <p>{`MRP Rs.${item.price}`}</p>
          <Button style={{ width: "50%" }} onClick={() => modifyCart()}>
            Buy Now
          </Button>
        </div>
      </div>
    ) : (
      <div className="card-container">
        <h2 className="heading">{item.name}</h2>
        <img
          src={require("../../../static/images/products/" +
            folderName +
            "/" +
            imageName +
            ".jpg")}
          alt={item.name}
          className="card-container__image"
        />
        <p className="card-container__text">{item.description}</p>
        <div className="buy-section">
          <p>{`MRP Rs.${item.price}`}</p>
          <Button style={{ width: "50%" }} onClick={() => modifyCart()}>
            Buy Now
          </Button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    editCart: (id) => dispatch(editCart(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
