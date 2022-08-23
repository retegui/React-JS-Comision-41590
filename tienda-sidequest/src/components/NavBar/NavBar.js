import './NavBar.css';

function NavBar (){
    return(
        
          <div className="barra-navegador">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="pages/inicio.html"><h3>Inicio</h3></a>
              </li>
               
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="pages/articulos.html"><h3>Articulos</h3></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="pages/noticias.html"><h3>Noticias</h3></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="pages/reparaciones.html"><h3>Reparaciones</h3></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="pages/Contacto.html"><h3>Contacto</h3></a>
              </li>
            </ul>
        </div>
             )
}

export default NavBar;