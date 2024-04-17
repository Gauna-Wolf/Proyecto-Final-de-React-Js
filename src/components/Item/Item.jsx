import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="card h-100 bg-light">
            <img
                src={producto.img}
                className="card-img-top mx-auto"
                alt={producto.name}
                style={{ width: "70%" }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">Precio: ${producto.price}</p>
                <p className="card-text">Stock Disponible: {producto.stock}</p>
            </div>
            <div className="card-footer">
                <Link to={`/item/${producto.id}`} className="btn btn-primary">
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default Item;
