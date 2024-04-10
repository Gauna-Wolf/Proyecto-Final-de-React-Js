

const ItemDetail = ({ item }) => {
    return (
        <div>
            <div >
                <picture > 
                    <img src={img} alt={name} />
                </picture>
                <section >
                <h4 >{name}</h4>
                    <small>Stock Disponible: {stock}</small>
                    <p >{description}</p>
                    <p >$ {price}</p>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail
