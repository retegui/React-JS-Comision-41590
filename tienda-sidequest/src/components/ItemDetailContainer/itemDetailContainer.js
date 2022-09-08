import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../../helper/helper";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    console.log("productId",productId);

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() =>{
            const product = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(product)
        },2000);
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto)
            setItem(producto)
            setLoading(false)
        }
        getProducto();
    },[productId])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            {

           loading ? <div> 
            <SpinnerDotted size="300px" color="red"/>
            <h2>Cargando</h2>
            </div>
           :
            <ItemDetail item={item}/>
        }
        </div>
    )
}