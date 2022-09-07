import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({item})=>{

    const onAdd = (count)=>{
        console.log("onAdd", count)
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.img} alt={item.nombre}/>
            </div>
            <div className='img-container'>
                <h4>{item.nombre}</h4>
                <h5>$ {item.precio}</h5>
            </div>
            <ItemCount initial={1} stock={item.cantidad} onAdd={onAdd}/>
        </div>
    )
}