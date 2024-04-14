import React from 'react'

const Item = (producto) => {
    return (
        <div >
            <article >

                <header >
                    <h4> {name}</h4>
                </header>
                <div>
                    <picture>
                        <img src={img} alt={name} />
                    </picture>
                    <div>
                        <section >
                            <p >Precio: $ {price}</p>
                            <small>Stock Disponible: {stock}</small>
                        </section>
                        <footer>
                              <Link to={`/item/${producto.id}`} className="Option  btn btn-primary mb-2"> Ver Detalles</Link>
                        </footer>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Item
