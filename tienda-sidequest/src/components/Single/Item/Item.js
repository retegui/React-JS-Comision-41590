import React from 'react'
import './Item.css'
import {Contador} from '../../Contador/contador' 

const Item = ({data}) => {
    return (
        <div>
            <div classname="product" key={data.nombre}>
                <img src={data.img} alt=""/>
                <h1>{data.nombre}</h1>
                <h2>${data.precio}</h2>
                <Contador stock={data.cantidad} initial={0} agregarProducto={data.agregar}/>
            </div>
        </div>
    )
}

export default Item