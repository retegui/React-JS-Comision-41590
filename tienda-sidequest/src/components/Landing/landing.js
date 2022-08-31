import React, {useEffect, useState} from 'react'
import { Mensaje } from '../Mensaje/mensaje'
import { Productos } from '../Productos/productos'
import {arregloStock} from '../../data/arregloStock'

export const Landing = () => {
    const [articulos, setArticulos] = useState([]);

    const obtenerArticulos = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(arregloStock)
            }, 3000);
        })
    }

    useEffect(()=>{
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerArticulos();
                setArticulos(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])

    return (
        <div className='listContainer'>
            <Mensaje/>
            <div className='stockContainer'>
               {
                    articulos.map((articulos)=>{
                        return(
                            <Productos articulos={articulos}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
