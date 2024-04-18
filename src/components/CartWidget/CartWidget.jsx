import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from "../../assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="cart-counter">
            <Link to="/carrito" className="nav-link">
                <img className="cart-icon" src={cart} alt="Cart" />
                <span>{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
}

export default CartWidget;
