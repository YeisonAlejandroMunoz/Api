import React from 'react'
import Poke1 from '../img/Charmander.png'
import Poke2 from '../img/wolwasor.jfif'
import Poke3 from  '../img/Squirtle.png'
import CardApp from './CardApp'
import './StyleCards.css'

const GropuCard = [
    {
 id:1,
 img: Poke1,
 title: 'Charmander',
    },
    {
 id:2,
 img: Poke2,
 title: 'Bulbasaur',
    },
    {
 id:3,
 img: Poke3,
 title: 'Squirtle',
    },
]


const CarDi = ()=> {
  return (
    <div className='TheCard'>
      {
        GropuCard.map((tarjeta) =>(
          <div>
            <CardApp key={tarjeta.id} foto={tarjeta.img} nombre={tarjeta.title} />
          </div>
        ))
      }
    </div>
  )
}

export default CarDi