import React from 'react'
import './Item.css'

const Item = ({data}) => {
    return (
        <div>
            <div classname="product" key={data.nombre}>
                <img src={data.imagen} alt=""/>
                <h1>{data.nombre}</h1>
                <h2>${data.precio}</h2>
            </div>
        </div>
    )
}

export default Item