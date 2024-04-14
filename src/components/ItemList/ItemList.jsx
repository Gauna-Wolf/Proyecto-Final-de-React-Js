import Item from "../Item/Item"

const ItemList = ({productos, titulo}) => {

  return (
    <div>
      <h2>{titulo}</h2>
      <div>
        {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
      </div>
    </div>
  )
}

export default ItemList
