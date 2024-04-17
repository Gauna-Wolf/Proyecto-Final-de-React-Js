import { Link } from "react-router-dom"
import cart from "../../assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div >
        <div >
            <Link  to="/carrito"><img style={{width:20}} src={cart} /><span> {cantidadEnCarrito()}</span></Link>
        </div>
    </div>
  )
}

export default CartWidget

