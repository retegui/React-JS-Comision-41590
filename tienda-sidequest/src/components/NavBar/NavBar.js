import './NavBar.css'; 
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/img/avatar1.png';


function NavBar (){
    return(  
        <div className="barra-navegador">
          <img src={Logo} alt='' height="150px"></img>
          <div className="accesos">Inicio</div>
          <div className="accesos">Articulos</div>
          <div className="accesos">Noticias</div>
          <div className="accesos">Reparaciones</div>
          <div className="accesos">Canjes</div>
          <div className="accesos">Contacto</div>
          <CartWidget />
          </div>
          )
}

export default NavBar;