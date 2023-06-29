import React from 'react'
import HeroSection from './Components/HeroSection'

const Home = () => {
  const data = {
    name: 'Manisha Nayak',
    image: './images/hero,svg'
  }
  return (
    <div>
        <HeroSection {...data}/>
    </div>
  )
}

export default Home 