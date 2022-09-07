import React from 'react'

export const Contacto = () => {
  return (
    <div class="contacto container-fluid row">
    <div class="input-contacto container-fluid row col-md-6">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Direccion de Email </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="pepe@gmail.com"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre y apellido </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Pepe Garcia"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Localidad</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="CABA"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Encuesta</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>¿Cual es tu  marca de consolas favorita?</option>
            <option value="1">Nintendo</option>
            <option value="2">Sony</option>
            <option value="3">Microsoft</option>
            <option value="4">Sega</option>
            <option value="5">Atari</option>
            <option value="6">Todas</option>
            <option value="7">Ninguna</option>
            <option value="8">PC Masterrace</option>
        </select>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Direccion de Email </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
        <label for="formFile" class="form-label">Foto o video (en caso de reparacion o restauracion)</label>
        <input class="form-control" type="file" id="formFile"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Consulta, pedido o sugerencia</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <div class="mb-3">
        <a class="boton-enviar btn-primary" href="#" role="button">ENVIAR</a>
        </div>
    </div> 
    <div class="mapa container-fluid row col-md-6">
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6198.181161457519!2d-58.4384624376772!3d-34.62004060666128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca409adeca73%3A0x35a2c1d2aa63ed53!2sCaballito!5e0!3m2!1sen!2sar!4v1637633598453!5m2!1sen!2sar" width="768" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
        </div>
    </div>
  )
}
  

