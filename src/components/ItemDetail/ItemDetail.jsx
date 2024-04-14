import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
       cantidad < item.stock && setCantidad (cantidad + 1)
    }
    
    const handleAgregar = () =>{
        console.log({...item , cantidad});
        }

    return (
        <div>
            <div >
                <picture > 
                    <img src={item.img} alt={item.name} />
                </picture>
                <section >
                <h4 >{item.name}</h4>
                    <small>Stock Disponible: {item.stock}</small>
                    <p >{item.description}</p>
                    <p >$ {item.price}</p>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail
