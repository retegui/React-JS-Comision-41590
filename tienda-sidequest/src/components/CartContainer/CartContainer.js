import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { CartItem } from '../CartItem/CartItem.js';
import './CartContainer.css'
import {Link} from 'react-router-dom';

export const CartContainer = () => {
  const {productCartList, clearProductCartList, getTotalPrice} = useContext(CartContext);

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
            <div>Total compra ${getTotalPrice()}.00</div>
            <button onClick={clearProductCartList}>Vaciar carrito</button>
            <Link to="/Mantenimiento">
                    <button>Finalizar compra</button>
                </Link>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
