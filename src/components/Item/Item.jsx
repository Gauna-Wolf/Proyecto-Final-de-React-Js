import React from 'react'
import { Link } from 'react-router-dom'

const Item = (producto) => {
    return (
        <div >
            <article >

                <header >
                    <h4> {producto.titulo}</h4>
                </header>
                <div>
                    <picture>
                        <img src={producto.img} alt={producto.titulo} />
                    </picture>
                    <div>
                        <section >
                            <p >Precio: $ {producto.price}</p>
                            <small>Stock Disponible: {producto.stock}</small>
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
