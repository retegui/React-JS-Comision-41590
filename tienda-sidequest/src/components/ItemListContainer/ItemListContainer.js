import './ItemListContainer.css'; 
import Problemas from '../../assets/img/problemas.jpg';

function ItemListContainer (){
    return(  
      <div>
        <div className='standby'><img src={Problemas} alt=''></img></div>
        <div className='provisorio'> <h3>SITIO EN CONSTRUCCION</h3> </div>
      </div>
             )
}

export default ItemListContainer;