import React,{useState} from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  ArrowForward,
  ArrowRight,
  HeroH1,
  HeroP,
  HeroContent,
  BtnWrapper,
} from "../styles/Hero";
import { Button } from "../../../common/components/Button/Button-Style";
const Hero = () => {
  const [hover,setHover]= useState(false);
  const onHover= ()=>{
    setHover((prevState)=> !prevState)
  }
  // src={require('../../../assets/video.mp4')}
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={require('../../../assets/video.mp4')}  type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up today and receive $250 credit in credit towards your next
          payment.{" "}
        </HeroP>
      </HeroContent>
      <BtnWrapper>
        <Button primary={true} dark={true} to="/sign-up" onMouseEnter={onHover} onMouseLeave={onHover}>
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </BtnWrapper>
    </HeroContainer>
  );
};
export default Hero;
