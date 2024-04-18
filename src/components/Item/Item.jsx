import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="card h-100 bg-light ">
          <div className="card-body text-center bg-light-gray text-dark p-2 ">
                <h4 className="card-title ">{producto.titulo}</h4>
            </div>
            <img
                src={producto.img}
                className="card-img-top mx-auto "
                alt={producto.name}
                style={{ width: "60%" }}
            />
            <div className="card-body text-center">
                
                <p className="card-text">Precio: ${producto.price}</p>
                <p className="card-text">Stock Disponible: {producto.stock}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <Link to={`/item/${producto.id}`} className="btn btn-secondary">
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default Item;
