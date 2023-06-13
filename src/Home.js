import React from 'react'
import heroImage from './assets/heroImage.png'
import './Home.css'


const Home = () => {
  return (
    <div name="home" className="container">
    <h1>Hi there, my name is Saif. <br/> I'm a Web Developer based in India.</h1>
      <img src={heroImage} alt='Saif Ali' />
    </div>
  )
}

export default Home