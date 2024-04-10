import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"




function App() {
  return (
    <>
    <NavBar/>      
    <ItemListContainer/>   
    <ItemDetailContainer itemId={2}/>
    </>
  )
}

export default App
