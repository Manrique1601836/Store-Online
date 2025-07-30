
import '../style/view/Store.css'
import He from '../base/He.js'
import She from '../base/She.js'
import Son from '../base/Son.js'
import { useEffect, useState } from 'react'

function Store() {

    const [carrito, setCarrito] = useState(() => {
        try {
            const guardado = localStorage.getItem("micarrito");
            const parseado = JSON.parse(guardado);
            return Array.isArray(parseado) ? parseado : [];
        } catch {
            return [];
    }
    });

    useEffect(() => {
        localStorage.setItem("micarrito", JSON.stringify(carrito));
    }, [carrito]);


    const agregarItem = (item) => {
        setCarrito(prev => {  /** contenedor del carrito actual */
            const existente = prev.find(p => p.id === item.id);
            if (existente) {
                return prev.map(p => 
                    p.id === item.id ? { ...p, cantidad: p.cantidad + 1 } : p
                );
            } else {
                return [...prev, { ...item, cantidad: 1 }];
            }
        });
    };

    const total = carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);

    const totalProductos = Array.isArray(carrito) ? carrito.reduce((acc, item) => acc + (Number(item.cantidad) || 0), 0) : 0;
    
    const vaciarCar = () => {
        if(confirm("Desea vaciarla por completo?? ")){
            setCarrito([])
        }
    };

    const disminuirCantidad = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito.map(item => item.id === id ? { ...item, cantidad: item.cantidad - 1 }: item).filter(item => item.cantidad > 0) 
        );
    };

    const eliminarItem = (id) => {
        if(confirm("Eliminar producto??")){
            setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
        }
    };  

    return(
        <>
            <main>
                <div className="store-submain">
                    <div className="store-texto">
                        <p>Compra y elige tu estilo ...</p>
                    </div>
                    <div className="store-lupa">
                        <input type="search" placeholder='buscalo ahora'/>
                    </div>
                    <div className="store-bag">
                        <input type="checkbox" id="bag-bag"/>
                        <label htmlFor="bag-bag" id="label-bag">
                            <svg  
                                xmlns="http://www.w3.org/2000/svg"  
                                width="40"  
                                height="40"  
                                viewBox="0 0 24 24"  
                                fill="none"  
                                stroke="currentColor"  
                                strokeWidth="2"  
                                strokeLinecap="round"  
                                strokeLinejoin="round"  
                                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                            </svg>
                            <div className="ttl-productos">
                                <span>{totalProductos}</span>
                            </div>
                        </label>
                        <div className="bag-car">
                            <div className="car-header">
                                <h2>Lista de productos</h2>
                            </div>
                            <div className="car-main">
                                <table>
                                    <tbody>
                                        {carrito.map((item,index) => (
                                            <tr key={index}>
                                                <td><img src={item.url} alt={item.nombre} width="60" height="60"/></td>
                                                <td>
                                                    <div className="td-box">
                                                        <button onClick={() => agregarItem(item)}>+</button>
                                                        <span>{item.cantidad || 0}</span>
                                                        <button onClick={() => disminuirCantidad(item.id)}>-</button>
                                                    </div>
                                                </td>
                                                <td>{item.nombre}</td>
                                                <td><button onClick={() => eliminarItem(item.id)}>x</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="car-footer">
                                <div className="car-footer-main">
                                    <p>Total:</p>
                                    <span>{total.toFixed(2)}</span>
                                </div>
                                <div className="car-footer-btns">
                                    <button>Realizar compra</button>
                                    <button onClick={() => vaciarCar()}>Vaciar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-store">
                    <div className="main-store-home">
                        Nike
                    </div>

                    <section id='#store/he'>
                        <div className="section-texto">
                            <p>Hombres</p>
                        </div>
                        <div className="section-productos">
                            {He.map((item,index) => (
                                <div className="box" key={index}>
                                    <div className="box-img">
                                        <img src={item.url} alt={item.nombre} />
                                    </div>
                                    <div className="box-descripcion">
                                        <div className="box-descrip">
                                            <p>{item.nombre}</p>
                                            <span>{item.precio.toFixed(2)}</span>
                                        </div>
                                        <div className="box-btn">
                                            <button onClick={() => agregarItem(item)}>Agregar</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    <section>
                        <div className="section-texto">
                        <p>Damas</p>
                        </div>
                        <div className="section-productos">
                            {She.map((item,index) => (
                                <div className="box" key={index}>
                                    <div className="box-img">
                                        <img src={item.url} alt={item.nombre} />
                                    </div>
                                    <div className="box-descripcion">
                                        <div className="box-descrip">
                                            <p>{item.nombre}</p>
                                            <span>{item.precio.toFixed(2)}</span>
                                        </div>
                                        <div className="box-btn">
                                            <button onClick={() => agregarItem(item)}>Agregar</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    <section>
                        <div className="section-texto">
                            <p>Niños</p>
                        </div>
                        <div className="section-productos">
                            {Son.map((item,index) => (
                                <div className="box" key={index}>
                                    <div className="box-img">
                                        <img src={item.url} alt={item.nombre} />
                                    </div>
                                    <div className="box-descripcion">
                                        <div className="box-descrip">
                                            <p>{item.nombre}</p>
                                            <span>{item.precio.toFixed(2)}</span>
                                        </div>
                                        <div className="box-btn">
                                            <button onClick={() => agregarItem(item)}>Agregar</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                </div>
            </main>
        </>
    )
}
export default Store