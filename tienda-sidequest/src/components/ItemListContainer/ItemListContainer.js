/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../../helper/helper";
// import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import sor from '../../assets/img/sor.gif'

export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();
    console.log('tipoProducto',tipoProducto);

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
            } else{
                const nuevaLista = resultado.filter(item=>item.empresa === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    console.log('productos', productos)
    return(
        <div className="item-list-container" >
            <p>Todas las categorias</p>
            <ItemList items={productos}/>
        </div>
    )
}