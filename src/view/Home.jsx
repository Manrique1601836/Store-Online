import { useEffect, useState } from "react"

function Home() {

    const [dato, setDato] = useState(() => {
        const datoGuardado = localStorage.getItem("contador")
        return datoGuardado !== null ? Number(datoGuardado) : 0
    })

    
   /*
    const [dato, setDato] = useState(() => {
        const datoGuardado = localStore.getItem("contador")
        return datoGuardado !== null ? number(datoGuardado)
    })
   */ 

    const [letras, setLetra] = useState(() => {
        const textoGuardada = localStorage.getItem("letraGuardada")
        return textoGuardada !== null ? textoGuardada : ""
    })


    const [inputtexto,setInputtexto] = useState("")

    useEffect(() => {
        console.log("Guardando dato:", dato)
        localStorage.setItem("contador", dato)
    }, [dato])

    useEffect(() => {
        console.log("Guardando dato:", letras)
        localStorage.setItem("letraGuardada", letras)
    }, [letras])

    const aumentar = () => {
        setDato(dato + 1)
    }

    const disminuir = () => {
        setDato(dato - 1)
    }

    const guardartexto = (e) => {
        e.preventDefault()
        setLetra(inputtexto)
        setInputtexto("")
    }

    return (
        <>
            <main>
                <div className="box">
                    <p>{dato}</p>
                    <button onClick={aumentar}>Aumentar</button>
                    <button onClick={disminuir}>Disminuir</button>
                </div>
                <div className="box">
                    <p>{letras}</p>
                    <form onSubmit={guardartexto}>
                        <input 
                            type="text" 
                            value={inputtexto}
                            onChange={(e) => setInputtexto(e.target.value)}
                            placeholder="Escribe algo"
                        />
                        <button type="submit">agregar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Home