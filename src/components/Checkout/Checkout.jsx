import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
          cliente: data,
          productos: carrito,
          total: precioTotal(),
        };
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
    
        addDoc(pedidosRef, pedido)
          .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
      if (pedidoId) {
        return (
          <div className="container text-center">
            <h1 className="main-title mt-4">¡Gracias por tu compra!</h1>
            <p >Tu número de pedido es: {pedidoId}</p>
            <Link to="/" className="btn btn-primary  mb-4">Volver a la tienda</Link>
          </div>
        );
      }
  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-1">
            <form onSubmit={handleSubmit(comprar)}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" {...register("nombre")} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" {...register("email")} />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="telefono" {...register("telefono")} />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección de envío</label>
                <input type="text" className="form-control" id="direccion" {...register("direccion")} />
              </div>
              <button className="btn btn-primary mb-5" type="submit">Finalizar compra</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Checkout
