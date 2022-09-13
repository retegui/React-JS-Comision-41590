import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.img} alt={item.nombre}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.nombre}</p>
                <p>Precio unitario: $ {item.precio}.00</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio total: $ {item.precioTotal}.00</p>
                <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}
