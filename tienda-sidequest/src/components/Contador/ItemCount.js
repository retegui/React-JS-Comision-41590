import {useState} from "react";

export const Contador = ({stock, initial})=>{
    const[contador, setContador] = useState (initial);

    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador + 1)
        }
    }
    const disminuir = ()=>{
        if(contador>0){
            setContador(contador - 1)
        }
    }

    return(
        <div className="provisorio">
            
            <button onClick={incrementar}>Incrementar</button>
            <p>Unidades {contador}</p>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}