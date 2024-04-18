import React, { useEffect } from 'react'
import "./nosotros.css"
const Nosotros = () => {

    useEffect(() =>{

      const clickear = () => {
        console.log("click");
      }

      window.addEventListener("click", clickear)

      return() => {
        window.removeEventListener("click", clickear)
      }

    }, [])




  return (
  
        <div className="container mt-5 ">
          <div className="row nosotros">
            <div className="col-lg-6">
              <h1>Nuestra Historia</h1>
              <p>Somos una tienda dedicada a ofrecer lo mejor en tecnología móvil. Desde nuestros humildes comienzos, nos hemos esforzado por brindar a nuestros clientes una amplia gama de productos de calidad, incluyendo los últimos modelos de celulares, notebooks y tablets.</p>
              <p>Nuestro equipo está compuesto por apasionados de la tecnología, listos para ayudarte a encontrar el dispositivo perfecto para tus necesidades. Nos enorgullece ofrecer un servicio excepcional y asesoramiento experto a cada uno de nuestros clientes.</p>
            </div>
            <div className="col-lg-6">
              <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-8a357.appspot.com/o/msi.jpg?alt=media&token=189c3a0e-4fa7-499c-bc57-ef34ac943206" alt="Nosotros" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <h2>Celulares</h2>
              <p>Descubre una amplia selección de los últimos modelos de smartphones de marcas reconocidas. Desde iPhones hasta dispositivos Android, tenemos todo lo que necesitas para mantenerte conectado.</p>
            </div>
            <div className="col-lg-4">
              <h2>Notebooks</h2>
              <p>Explora nuestra colección de notebooks potentes y elegantes, perfectos para el trabajo, el estudio o el entretenimiento. Desde ultrabooks hasta laptops gaming, tenemos el dispositivo adecuado para ti.</p>
            </div>
            <div className="col-lg-4">
              <h2>Tablets</h2>
              <p>Sumérgete en el mundo de la tecnología portátil con nuestras tablets de alta calidad. Con pantallas impresionantes y un rendimiento excepcional, nuestras tablets son ideales para el trabajo sobre la marcha o la relajación en casa.</p>
            </div>
          </div>
        </div>
      );
    }
    
export default Nosotros
