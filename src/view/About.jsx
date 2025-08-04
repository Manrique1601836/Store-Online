
import '../style/view/About.css'
import Woman from '../img/Woman.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'

function About() {
    return(
        <>
            <main>
                <div className="main-about">
                    <div className="about-one">
                        <div className="about-texto">
                           <p>
                            En D&D entendemos que la moda va más allá de seguir tendencias; 
                            es una forma de contar quién eres sin decir una palabra. Nuestra
                            tienda nace con la visión de crear un espacio donde cada persona
                            pueda encontrar ropa con estilo, identidad y carácter. Nos especializamos
                            en prendas cuidadosamente seleccionadas y diseñadas, combinando calidad,
                            comodidad y un toque único que distingue a nuestra marca. En D&D no solo
                            vendemos ropa, ofrecemos una experiencia: desde la atención personalizada
                            hasta cada detalle en nuestros diseños. Creemos en el poder de vestir 
                            con seguridad, en sentirse bien por dentro y por fuera, y en la libertad
                            de expresar tu personalidad a través de lo que usas. Ya sea para un
                            look casual, urbano o más elegante, en D&D encontrarás algo que se
                            adapte a ti y a tu estilo de vida. Gracias por confiar en nosotros
                            y ser parte de esta comunidad que valora la autenticidad y el buen
                            gusto. Bienvenid@ a D&D, donde tu estilo encuentra su mejor versión.
                           </p>
                    </div>
                    <div className="about-imagen">
                        <img src={Woman} alt="" />
                    </div>
                    </div>

                    <div className="about-two">
                        <div className="two-img">
                            <img src={img1} alt="" className='img1'/>
                            <img src={img2} alt="" className='img2'/>
                            <img src={img3} alt="" className='img3'/>
                            <img src={img4} alt="" className='img4'/>
                            <img src={img5} alt="" className='img5'/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default About