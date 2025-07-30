import { useEffect } from "react"
import { useState } from "react"

function Contact() {

    const [dato,setDato] = useState(0)
    const [texto,setTexto] = useState("")

    useEffect(() => {
        const Guardando = localStorage.getItem("contador")
        if(Guardando !== null){
            setDato(Number(Guardando))
        }
    }, [])
    
    useEffect(() => {
        const tex = localStorage.getItem("letraGuardada")
        if (tex !== null){
            setTexto(tex)
        }
    }, [])
    
    return(
        <>
            <main>           
                <h1>este es el dato de la otra pagina</h1>
                <p>{dato}</p> 
                <h1>Este es el texto de la otra pagina</h1>
                <p>{texto}</p>
            </main>        
        </>
    )
}
export default Contact