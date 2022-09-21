import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';
import { doc, getDoc } from "firebase/firestore";
import { basededatos } from "../../utils/firebase";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({});

    useEffect(()=>{
        const queryRef = doc(basededatos,"Items",productId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            setLoading(false);
            setItem(newDoc);
        }).catch(error=>console.log(error));

    },[productId])

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