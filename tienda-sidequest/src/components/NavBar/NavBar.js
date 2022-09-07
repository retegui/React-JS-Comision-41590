import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logo from '../../assets/img/logo.png';
import {NavLink, Link} from 'react-router-dom';

export const NavBar = () =>{
    return(
        <div className='nav-container container-fluid'>
            <Link to="/">
                <div className='container-fluid'>
                    <img className="nav-brand" src={logo} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion container-fluid'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Nintendo">Nintendo</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Sega">Sega</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Playstation">Playstation</NavLink>
            </div>
            <div class="d-flex" className="botonbusqueda container-fluid">
                <input  type="search" placeholder="¿A que queres jugar?" aria-label="Search"></input>
                <button type="submit">BUSCAR</button>
            </div>
            <div classname="cesta container-fluid">
                <CartWidget/>
            </div>
        </div>
    )
}
