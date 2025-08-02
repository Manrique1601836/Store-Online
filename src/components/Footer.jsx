
import '../style/components/Footer.css'
import { Link } from 'react-router-dom'

function Footer () {
    return(
        <>
            <footer>
                <div className="footer">
                    <div className="footer-text">
                        <p>
                            Gracias por confiar en D&D Ropa.  
                            Aquí encontrarás lo último en moda para él, ella y todos los estilos.  
                            Envíos a todo el país. Atención personalizada y ofertas exclusivas cada semana.
                        </p>
                    </div>

                    <div className="footer-link">
                        <a href="https://www.linkedin.com/in/edwin-manrique-a10148375/" target='_blank'>Perfil-Creador</a>
                    </div>
                    <div className="footer-logo">
                        <Link to="/" className="linkHome"><h1>D</h1><p>&</p><h1>D</h1></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer