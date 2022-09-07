import mercadopago from '../../assets/img/mercadopago.png'
import visa from'../../assets/img/visa.png'
import mastercard from'../../assets/img/mastercard.png'
import amex from'../../assets/img/amex.png'
import banelco from'../../assets/img/banelco.png'
import mercadoenvios from'../../assets/img/mercado-envios.png'
import './Footer.css'
import { Mantenimiento } from '../Mantenimiento/Mantenimiento'

export const Footer = ()=>{

    return(
        <div class="container-fluid" className='footer'>
            <div class="row">
                <div class="links-sq footer container-fluid col-sm-12 col-md-4 text-md-left text-sm-center">
                    <h3><a href="index.html">SideQuest</a></h3>
                    <h3><a href="pages/articulos.html">Articulos</a></h3>
                    <h3><a href="pages/reparaciones.html">Reparaciones</a></h3>
                    <h3><a href="pages/contacto.html">Contacto</a></h3>
                </div>
                <div class="footer row container-fluid col-sm-12 col-md-4 text-center">
                    <div><h4>Medios de pago y envio</h4></div>
                    <div class="icon-medios container-fluid col-sm-4 col-md-4"> <img src={mercadopago} alt="" width="64"   height="40"/></div>
                    <div class="icon-medios container-fluid col-sm-4 col-md-4 "><img src={visa} alt="" width="64"   height="40"/></div>
                    <div class="icon-medios container-fluid col-sm-4 col-md-4 "><img src={mastercard} alt="" width="64"   height="40"/></div>
                    <div class="icon-medios container-fluid col-sm-4 col-md-4 "><img src={amex} alt="" width="64"   height="40"/></div>
                    <div class="icon-medios container-fluid col-sm-4 col-md-4 "><img src={banelco} alt="" width="64"   height="40"/></div>
                    <div class="icon-medios container-fluid col-sm-4 col-md-4 "><img src={mercadoenvios} alt="" width="64"   height="40"/></div>

                </div>
                <div class="newsletter container-fluid col-sm-12 col-md-4 text-center">
                    <h4>Newsletter</h4>
                    <form method="post" action="">
                        <div class="form-news">
                            <input type="text" name="name" id="name" class="form-input" placeholder="Nombre"></input>
                        </div>
                        <div class="form-news">
                            <input type="text" name="mail" id="mail" class="form-input" placeholder="Tu email"></input>
                        </div>
                    <button class="boton-enviar">Enviar</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}