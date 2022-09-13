import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { CartItem } from '../CartItem/CartItem.js';
import './CartContainer.css'

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div className='contenedorCarrito'>
      <p>Carrito de compras</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button onClick={clearProductCartList}>Vaciar carrito</button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
