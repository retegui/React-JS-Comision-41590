import {useState} from "react";
import arregloStock from '../Landing/landing';
import '../Contador/contador.css'

// const stock = arregloStockcantidad

export const Contador = ({stock, initial, agregarProducto})=>{
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
            
            <button onClick={disminuir}>-</button> 
            <p>Unid. {contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={()=>(agregarProducto(contador))}
             style={{background: contador>0 ? 'yellow' : 'red'}}>Agregar al carrito</button> 

        </div>
    )
}