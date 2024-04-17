import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className='container'>
            <h1>Carrito</h1>
            {carrito.map((prod) =>
                <div key={prod.id}>
                    <h2>{prod.titulo}</h2>
                    <p>Precio x unidad ${prod.price}</p>
                    <p>Precio total ${prod.price * prod.cantidad}</p>
                    <p>Cantidad {prod.cantidad}</p>
                    <br />
                </div>
            )}
            {carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </> :
                <h2>El carrito de compras esta vacio.</h2>

            }
        </div>
    )
}

export default Carrito
