import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };
    
    const handleAgregar = () => {
        console.log({ ...item, cantidad });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.img} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-6 p-4" style={{ backgroundColor: "#f8f9fa", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
                    <h4>{item.name}</h4>
                    <p>Stock Disponible: {item.stock}</p>
                    <div style={{ background: "rgba(0, 0, 0, 0.05)", padding: "10px", borderRadius: "5px" }}>
                        <p>{item.descripcion}</p>
                    </div>
                    <p>$ {item.price}</p>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
