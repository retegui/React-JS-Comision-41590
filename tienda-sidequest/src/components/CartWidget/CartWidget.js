import Carrito from '../../assets/img/carrito.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';

export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(  
      <div>
        {
           productCartList.length>0 &&
          <>
              <Link to="/cart">
                <img src={Carrito} alt="" style={{width:30}}/>
              </Link>
              <span style={{backgroundColor: 'black', borderRadius:"20%", width:"20px", heigth:"20px", fontSize:"20px", color:"white"}}>{getTotalProducts()}</span>
              
           </>
          } 
          </div> 
                  )
}

