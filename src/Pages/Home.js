import React from 'react'
import NavbarApp from '../Components/NavbarApp/NavbarApp'
import SliderApp from '../Components/SliderApp/SliderApp'
import CarDi from '../Components/CarDi/CarDi'
import FooterApp from '../Components/FooterApp/FooterApp'

function Home() {
  return (
    <div>
        <NavbarApp/>
        <SliderApp/>
        <h1> Pokemones de la Primera Generación </h1>
        <CarDi/>
        <FooterApp/>
    </div>
  )
}

export default Home