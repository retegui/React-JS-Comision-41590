import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { basededatos } from "../../utils/firebase";


export const ItemListContainer = ()=>{
    const {consola} = useParams();
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            try{  
                let queryRef = ""

                if(!consola){
                    queryRef = collection(basededatos,"Items");
                    
                } else{
                    queryRef = query(collection(basededatos,"Items"),where("empresa","==",consola))
                    
                }
            const response = await getDocs(queryRef);
            const datos = response.docs.map(doc=>{
                const newDoc = {
                    ...doc.data(),
                     id:doc.id}
                return newDoc;
                });
                setProductos(datos)
                setLoading(false) 
                    

            } catch (error) {
                console.log(error);
            }

        }
        getData()
        

    },[consola])

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