import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useNotification } from "../../context/Notification"; // Importa el hook useNotification
import "./ItemDetail.css"
const ItemDetail = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const { setNotification } = useNotification(); // Usa el hook useNotification para acceder a setNotification

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };

    const handleAgregar = () => {
        agregarAlCarrito(item, cantidad); 
        setNotification("success", `${cantidad} ${item.titulo} agregado al carrito`); 
    };

    return (
        <div className="container mt-5 bg-light itemDetail">
            <div className="row itemDetail">
                <div className="col-md-6">
                    <img src={item.img} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-6 p-4" style={{ backgroundColor: "#f8f9fa", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
                    <h4>{item.name}</h4>
                    <p>Stock Disponible: {item.stock}</p>
                    <div style={{ background: "rgba(0, 0, 0, 0.10)", padding: "10px", borderRadius: "5px" }}>
                        <p>{item.descripcion}</p>
                    </div>
                    <p>$ {item.price}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={handleAgregar}
                    />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
