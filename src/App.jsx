import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros"
import { CartProvider } from "./context/CartContext"
import Carrito from "./components/carrito/Carrito"
import { NotificationProvider } from "./context/Notification"



function App() {

  return (
    <NotificationProvider>
      <CartProvider>
        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </NotificationProvider>

  )
}

export default App
