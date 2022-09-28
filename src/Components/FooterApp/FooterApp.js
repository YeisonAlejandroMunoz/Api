import React from 'react'
import logo from '../img/logopokemon.png'
import './Footer.css'

function FooterApp() {
  return (
    <div className='footer'>
      <div className='grupo1'>
        <div className='box'>
          <figure>
            <img src={logo}/>
          </figure>
        </div>
        <div className='box'>
            <h2>Pokemon</h2>
            <p>Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial</p>
        </div>
        <div className='box'>
            <h2>Contacto</h2>
            <div className='redes'>
              <p style={{fontWeight: 'bold'}}>CORREOS</p>
              <p>yamunoz833@misena.edu.co</p>
              <p>ykz73751@gmail.com</p>
              <p style={{fontWeight: 'bold'}}>TELEFONOS</p>
              <p>3206807276</p>
              <p>2762546</p>
            </div>
        </div>
      </div>
      <div className='grupo2'>
          <small>© Copyright 2022-Todos los derechos reservados</small>
        </div>
    </div>
  )
}

export default FooterApp