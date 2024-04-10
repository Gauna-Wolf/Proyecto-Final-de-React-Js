import React, { useEffect,useState } from 'react'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() =>{
     pedirDatos()
     .then((res) =>{
        setProductos(res)
     })
    }, [])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
