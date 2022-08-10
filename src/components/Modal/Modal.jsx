import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
// import { GlobalContext } from "../../../contexts/GlobalContext";
// import useFocusTrap from "../../../utils/useFocusTrap";
import "./Modal.scss";

import { handleCart} from '../../redux/actions/actions';

const Modal = ({ children, cartOpen , handleCart}) => {

  // const ref = useRef(null);
  // const setElementRef = useFocusTrap(null);

  useEffect(() => {
    if (cartOpen) {
      // setElementRef(ref);
      document.body.style.overflow = "hidden";
    }

    return () => {
      // setElementRef(null);
      document.body.style.overflow = "unset";
    };
  }, [cartOpen]);

  return ReactDom.createPortal(
    <div className="modal">
      <div
        className="modal__overlay"
        onClick={() => handleCart(false)}
      />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
}

const mapStateToProps = (state) => {
  return {
      cartOpen: state.cartOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleCart: (open) => dispatch(handleCart(open))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
