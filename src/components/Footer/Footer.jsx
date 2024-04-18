import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="ft py-0 mt-5" id='footer'>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-4 mb-2 contentFooter" >
            <h3 className="text-light contentFooter">Nosotros <hr /></h3>
            <p className="text-dark pt-2 contentFooter">
            Tu destino para la mejor tecnología móvil. Desde smartphones hasta tablets y notebooks, ofrecemos lo mejor para mantenerte conectado y productivo. Calidad y servicio excepcionales para llevar tu experiencia digital al siguiente nivel</p>
          </div>
          <div className="col-lg-4 mb-2 contentFooter" >
            <h3 className="text-light contentFooter">Contacto <hr /></h3>
            <ul className="list-unstyled text-dark pt-2 contentFooter">
              <li>Dirección: Calle Falsa 123, Ciudad Ficticia</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@miempresa.com</li>
            </ul>
          </div>
          <div className="col-lg-4 mb-2  contentFooter">
            <h3 className="text-light contentFooter">Síguenos  <hr /></h3>
            <ul className="list-unstyled contentFooter text-center">
              <li className=" pt-2"><FontAwesomeIcon className='iconoInsta' icon={faInstagram} style={{ fontSize: '1.5rem' }} /> Instagram</li>
              <li className=" pt-2"><FontAwesomeIcon className='iconoFace' icon={faFacebook} style={{ fontSize: '1.5rem' }} /> Facebook</li>
              <li className=" pt-2"><FontAwesomeIcon className='iconoWsp' icon={faWhatsapp} style={{ fontSize: '1.5rem' }} /> WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footerLine container-fluid text-center'>
        <p className='pt-1'>Diseño@GaunaEsteban</p>
      </div>
    </footer>
  );
}

export default Footer;
