// import React, {useEffect, useState} from 'react'
// import { Mensaje } from '../Mensaje/mensaje'
// import { Productos } from '../Productos/productos'
// import {itemList} from '../Container/ItemListContainer/ItemListContainer'

// export const Landing = () => {
//     const [articulos, setArticulos] = useState([]);

//     const obtenerArticulos = ()=>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve(itemList)
//             }, 2000);
//         })
//     }

//     useEffect(()=>{
//         const funcionAsincrona = async()=>{
//             try {
//                 const listado = await obtenerArticulos();
//                 setArticulos(listado);
//                 console.log('listado',listado);
//             } catch (error) {
//                 console.log("Hubo un error")
//             }
//         }
//         funcionAsincrona();
//     },[])

//     return (
//         <div className='listContainer'>
//             <Mensaje/>
//             <div className='stockContainer'>
//                {
//                     articulos.map((articulos)=>{
//                         return(
//                             <Productos articulos={articulos}/>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
