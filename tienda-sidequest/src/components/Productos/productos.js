import React, { useState } from 'react';
import {Contador} from '../Contador/contador';



const agregar = ()=>{
    console.log('funcion agregar')
  }

export const Product = ({articulos}) => {
    const [enCarrito, setenCarrito] = useState(0);

    const incrementar = ()=>{
        setenCarrito(enCarrito + 1);

    
    }

    return (
        <div className='stock'>
            <img src={articulos.img} alt="" className='stockImg'/>
            <h5>{articulos.nombre}</h5>
            <p>{articulos.consola}</p>
            <h5>$ {articulos.precio}</h5>
            <button>Detalles</button>
            <Contador stock={articulos.cantidad} initial={0} agregarProducto={agregar}/>
        </div>
    )
}


