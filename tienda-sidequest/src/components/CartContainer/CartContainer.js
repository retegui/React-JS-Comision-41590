import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { CartItem } from '../CartItem/CartItem.js';
import './CartContainer.css'
import { basededatos } from '../../utils/firebase';
import {collection, addDoc, doc, updateDoc} from "firebase/firestore";

export const CartContainer = () => {
  const {productCartList, clearProductCartList, getTotalPrice} = useContext(CartContext);
  const [idpedido, setIdpedido] = useState("");

  const sendpedido = (e)=>{
    e.preventDefault();
    const pedido = {
      comprador: {
        nombre: e.target[0].value,
        telefono:e.target[1].value,
        email:e.target[2].value
      },
      items: productCartList,
      total: getTotalPrice()
    }

    const queryRef = collection(basededatos,"pedidos");
    //agregamos el documento
    addDoc(queryRef, pedido).then(respuesta=>setIdpedido(respuesta.id))
    console.log(pedido)
  }

  const updatepedido = ()=>{
    const queryRef = doc(basededatos,"Items","CLyoAXyJ09bLgsg5PChM");
    updateDoc(queryRef, {
      empresa: "Playstation",
      pictureUrl: "https://firebasestorage.googleapis.com/v0/b/tienda-sidequest.appspot.com/o/fifa98.jpg?alt=media&token=b97af665-15cf-4324-ad22-cc6ccec37f0c",
      precio:5000,
      nombre:"Fifa 98"
    }).then(()=>console.log("producto actualizado"))
  }

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

            <div className='contenedorCompra'>
            <form onSubmit={sendpedido}>

              <div><input className='datosCompra' type="text" placeholder='Nombre'/></div>
              <div><input className='datosCompra' type="text" placeholder='Telefono'/></div>
              <div><input className='datosCompra' type="email" placeholder='Email'/></div>
              <div><button className='datosCompra' type='submit'>Enviar pedido</button></div>
            </form>
            <button onClick={updatepedido}>Refrescar</button>
            </div>
          </>
                    :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
