import React from 'react'
import { HeroContainer,HeroBg,VideoBg } from '../styles/Hero'
const Hero = () => {
  return (
    <HeroContainer id="home">
     <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4">
        </VideoBg>
     </HeroBg>
    </HeroContainer>
  )
}
export default Hero