import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {
  const data = {
    name: 'Manisha',
    image: './images/about1.svg'
  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default About