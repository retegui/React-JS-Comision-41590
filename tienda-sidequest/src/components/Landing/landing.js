import React, {useEffect, useState} from 'react'
import { Mensaje } from '../Mensaje/mensaje'
import { Productos } from '../Productos/productos'
import superMario from '../../assets/img/supermario64.jpg';
import pokemonRuby from '../../assets/img/pokemonruby.jpg';
import parasite from '../../assets/img/parasite2.jpg';

const arregloStock = () =>

[ 
    {
        id: 1,
        nombre: "Super Mario 64",
        consola: "Nintendo 64",
        desc: "Suelto",
        precio: 6175,
        imagen: superMario ,
        cantidad:5
    },
    {
        id: 2,
        nombre: "Pokemon Ruby",
        consola: "Gameboy Advance",
        desc: "Suelto",
        precio: 8614,
        imagen: pokemonRuby,
        cantidad:6
    },

    {
        id: 3,
        nombre: "Parasite Eve II",
        consola: "Playstation",
        desc: "En caja sin manual",
        precio: 10090,
        imagen: parasite,
        cantidad:4
    },
]

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
