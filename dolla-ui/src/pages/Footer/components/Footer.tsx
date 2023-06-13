import React from "react";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink
} from "../styles/Footer";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle> About Us </FooterLinkTitle>
               <FooterLink to="">How it works</FooterLink>
               <FooterLink to="">Testimonials</FooterLink>
               <FooterLink to="">Careers</FooterLink>
               <FooterLink to="">Investors</FooterLink>
               <FooterLink to="">Terms of Service</FooterLink>    
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle> Videos </FooterLinkTitle>
               <FooterLink to="">Submit Video</FooterLink>
               <FooterLink to="">Ambassadors</FooterLink>
               <FooterLink to="">Agency</FooterLink>
               <FooterLink to="">Influencers</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle> Contact Us </FooterLinkTitle>
               <FooterLink to="">Contact</FooterLink>
               <FooterLink to="">Support</FooterLink>
               <FooterLink to="">Destination</FooterLink>
               <FooterLink to="">Sponsorship</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
               <FooterLink to=""> Instagram </FooterLink>
               <FooterLink to="">Facebook</FooterLink>
               <FooterLink to="">Youtube</FooterLink>
               <FooterLink to="">Twitter</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
