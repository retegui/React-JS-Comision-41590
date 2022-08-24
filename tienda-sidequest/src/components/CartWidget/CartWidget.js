import './CartWidget.css';
import carrito from '../../assets/img/carrito.png';

function CartWidget (){
    return(  
      <div classname="iconoCarrito">
       <img src={carrito} alt="" />
      </div>
             )
}

export default CartWidget; 