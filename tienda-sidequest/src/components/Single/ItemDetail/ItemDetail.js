import {useState,useEffect} from 'react'
import getFetch from '../../../helper/helper.js'
import './ItemDetail.css'

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
    getFetch
    .then(response => {
        setData(response.find(prod => prod.id === 1))
        setLoading(false)
    })
}, [])

console.log(data)
        return (
            <div className="item-container">
            <h1>Detalle de prodcutos</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
            <div className="item-detail">
                    <img src={data.img} alt="" />
                    <h2>{data.nombre}</h2>
                    <h2>${data.precio}</h2>

                <div className="detail">
                        <h3>{data.consola}</h3>                        
                </div>
                    <h4>{data.desc}</h4>

                </div>

        }
    </div>
  )
}

export default ItemDetail