import { useEffect, useState } from "react"
import '../style/view/Bagshoopin.css'
import Woman from '../img/Woman.jpg'


function Bagar () {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        try {
            const guardado = localStorage.getItem("micarrito");
            const parseado = JSON.parse(guardado);
            if (Array.isArray(parseado)) {
                setCarrito(parseado);
            }
        } catch (e) {
            console.error("Error al leer el carrito", e);
        }
    }, []);

    return (
        <div>
            <main>
                <div className="main-store-bag">
                    <div className="bag-texto">
                        <h1>Lista de compras hechas por ti .. 👻</h1>
                    </div>
                    <div className="bag-dupli">
                        <div className="bag-items">
                        <table>
                            <thead>
                                <tr>
                                    <th>Prenda</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                               </tr>
                            </thead>
                            <tbody>
                                {carrito.map((item,index) => (
                                    <tr key={index}>
                                        <td><img src={item.url} alt={item.nombre} width="100"/></td>
                                        <td>{item.nombre}</td>
                                        <td>{item.precio.toFixed(2)}</td>
                                        <td>{item.cantidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bag-logo">
                        <img src={Woman} alt="" />
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Bagar