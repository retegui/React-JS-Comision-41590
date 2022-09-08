/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../../helper/helper";
// import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import sor from '../../assets/img/sor.gif'
import { SpinnerDotted } from 'spinners-react';

export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();
    console.log('tipoProducto',tipoProducto);

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
            
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
                setLoading(false) 
            } else{
                const nuevaLista = resultado.filter(item=>item.empresa === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    console.log('productos', productos)
    return(
        <div className="item-list-container" >
            <p>Videojuegos</p>{

           loading ? <div> 
            <SpinnerDotted size="300px" color="red"/>
            <h2>Cargando</h2>
            </div>
           :
            <ItemList items={productos}/>
        }
        </div>
    )
}