import Carrito from '../../assets/img/carrito.png';
import {Link} from 'react-router-dom';

export const CartWidget = ()=>{
    return(  
      <div>
        <Link to="/cart">
          <img src={Carrito} alt="" style={{width:30}}/>
        </Link>
        <span style={{backgroundColor: 'black', borderRadius:"20%", width:"20px", heigth:"20px", fontSize:"20px", color:"white"}}>2</span>
      </div> 
             )
}

