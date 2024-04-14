import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros"



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros/>} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App
