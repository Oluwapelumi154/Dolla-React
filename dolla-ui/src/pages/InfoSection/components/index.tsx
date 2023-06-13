import React from "react";
import { Button } from "../../../common/components/Button/Button-Style";
import {
  InfoContainer,
  InfoWrapper,
  Row,
  Column1,
  Subtitle,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  Column2,
  Img,
  ImgWrap,
} from "./styles/info";
import { InfoSectionProps } from "../../../interfaces";
const InfoSection: React.FC<InfoSectionProps> = (props) => {
  return (
    <InfoContainer id={props.id} lightBg={props.lightBg}>
      <InfoWrapper>
        <Row imgStart={props.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{props.topLine}</TopLine>
              <Heading lightText={props.lightText}>{props.headLine}</Heading>
              <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
              <BtnWrap>
                <Button to="/home" smooth={true} duration={500} spy={true} exact={true} offset={-80}
                primary={props.primary ? 1: 0}
                dark={props.dark ? 1: 0}
                dark2={props.dark ? true: false}
                >{props.buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={props.img} alt={props.alt}/>
            </ImgWrap>/
          </Column2>
        </Row>
      </InfoWrapper>
    </InfoContainer>
  );
};
export default InfoSection;
