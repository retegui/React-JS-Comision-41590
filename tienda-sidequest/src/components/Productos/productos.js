import React, { useState } from 'react';
import {Contador} from '../Contador/contador';
import { Landing } from '../Landing/landing';


const agregar = ()=>{
    console.log('funcion agregar')
  }

export const Productos = ({articulos}) => {
    const [enCarrito, setenCarrito] = useState(0);

    const incrementar = ()=>{
        setenCarrito(enCarrito + 1);

    
    }

    return (
        <div className='stock'>
            <img src={articulos.imagen} alt="" className='stockImg'/>
            <p>{articulos.nombre}</p>
            <Contador stock={articulos.cantidad} initial={1} agregarProducto={agregar}/>
        </div>
    )
}


