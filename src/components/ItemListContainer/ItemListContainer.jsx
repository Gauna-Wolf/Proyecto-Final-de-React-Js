import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs ,query, where} from "firebase/firestore"
import { db } from '../../firebase/config'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("Productos")
  const categoria = useParams().categoria;


  useEffect(() => {
    const productosRef = collection(db, "productos")
    const q = categoria ?  query(productosRef, where("categoria", "==", categoria )) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      })

  }, [categoria])

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} ItemList />
    </div>
  )
}

export default ItemListContainer
