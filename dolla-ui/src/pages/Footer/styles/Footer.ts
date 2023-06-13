import {Link} from 'react-router-dom'
import {LinkRouter, styled} from '../../../libs';
export const FooterContainer= styled.div`
 width: 100%;
 background-color: #010606;
 @media screen and (min-width: 1000px){
    height: 500px;
 }
`
export const FooterLinksContainer= styled.div`
width: 800px;
background-color: #010606;
@media screen and (max-width: 1000px){
    width: 600px;
}

`
export const FooterLinksWrapper= styled.div`
display: grid;
grid-gap: 6px;
grid-template-columns: 1fr 1fr 1fr 1fr;
@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
    padding: 40px 30px;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 30px; 
}
`
export const FooterWrapper= styled.div`
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100%;
`
export const FooterLinkItem= styled.div`
`;
export const FooterLinkTitle= styled.div`
 margin-bottom: 15px;
 color: #fff;
`
export const FooterLink= styled(LinkRouter)`
 display: flex;
 color: #fff;
 font-size: 14px;
 flex-direction: column;
 text-decoration: none;
 transition: all 0.5s ease-in-out;
 line-height: 40px;
 &:hover{
    color:${({theme})=> theme.colors.lemon};
    transition: all 0.5s ease-in-out;
 }
`;