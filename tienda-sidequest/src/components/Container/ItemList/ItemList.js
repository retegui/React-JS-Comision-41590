import {useState,useEffect} from 'react'
import getFetch from '../../helper/helper.js'
import Item from '../Single/Item/Item.js'
import './ItemList.css'

const ItemList = () => {
    const [DataTransfer,setData] = useState([])
    const [loading,setLoading] = useState (true)

    useEffect(() => {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    },[])
  return (
    <>
        <h1> Item List Container</h1>
        
    {
        loading ? <h2>Cargando...</h2>

        :

        <div className='grid-product'>
            {data.map(data => (
                    <Item key={data.name} data={data}/>
            ))} </div>
    }
    </>
  )      
}