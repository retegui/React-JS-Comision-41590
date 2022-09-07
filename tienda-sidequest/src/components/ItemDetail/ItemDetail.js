import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({item})=>{

    const onAdd = (count)=>{
        console.log("onAdd", count)
    }

    return(
        <div className='detail-container'>
            <h1 style={{width: "100%"}}>Detalle de producto</h1>
            <div className='img-container'>
                <img src={item.img} alt={item.nombre}/>
            </div>
            <div className='img-container'>
                <h3>{item.nombre}</h3>
                <h4>$ {item.precio}.00</h4>
                <h5>{item.desc}</h5>
            </div>
            <ItemCount initial={1} stock={item.cantidad} onAdd={onAdd}/>
        </div>
    )
}