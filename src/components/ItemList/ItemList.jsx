import Item from "../Item/Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2>{titulo}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productos.map((prod) => (
          <div key={prod.id} className="col">
            <Item producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
