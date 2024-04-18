import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container my-5 '>
            <h1 className="text-center mb-4 mt-5">Carrito de Compras</h1>
            {carrito.map((prod) =>
                <div key={prod.id} className="card mb-3">
                    <div className="card-body">
                        <h2 className="card-title">{prod.titulo}</h2>
                        <p className="card-text">Precio por unidad: ${prod.price}</p>
                        <p className="card-text">Precio total: ${prod.price * prod.cantidad}</p>
                        <p className="card-text">Cantidad: {prod.cantidad}</p>
                    </div>
                </div>
            )}
            {carrito.length > 0 ?
                <>
                    <h2 className="text-center">Precio Total: ${precioTotal()}</h2>
                    <div className="text-center">
                        <button className="btn btn-outline-secondary me-2" onClick={handleVaciar}>Vaciar Carrito</button>
                        <Link to="/checkout" className="btn btn-primary">Finalizar Compra</Link>
                    </div>
                </> :
                <h2 className="text-center">El carrito de compras está vacío.</h2>
            }
        </div>
    );
}

export default Carrito;
