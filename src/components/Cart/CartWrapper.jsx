import React from 'react';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartImage from '../../../static/images/cart.svg'
import Modal from '../Modal/Modal';
import CartModal from '../CartModal/CartModal'
import './CartWrapper.scss'

import { handleCart} from '../../redux/actions/actions';
import useWindowDimensions from '../../../utilities/useWindowDimensions';

const CartWrapper = ({ myCart, cartOpen, handleCart }) => {
    const count = Object.keys(myCart).length
    const navigate = useNavigate();
    const {width} = useWindowDimensions()

        const isMobileWidth = () => {
            
            return width < 481
        }

    return (
        <>
        <div className='cart-wrapper' onClick={isMobileWidth() ? () => navigate('/cartpage') : () => handleCart(true)}>
            <img src={CartImage} alt="Cart-Logo" className='cart-wrapper__image'/>
            <p className='cart-wrapper__text'>Item Count {count}</p>
        </div>
        {cartOpen && (
            <Modal>
            <CartModal cartOpen={cartOpen} />{" "}
          </Modal>
        )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        myCart: state.myCart,
        cartOpen: state.cartOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCart: (open) => dispatch(handleCart(open))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CartWrapper);