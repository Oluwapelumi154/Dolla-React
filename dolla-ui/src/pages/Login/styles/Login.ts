import styled from "styled-components";
import { LinkRouter } from "../../../libs";

export const LoginContainer=styled.div`
height: 100vh;
position: relative;
@media screen and (min-width: 800px){
justify-content: center;
display:flex;
align-items: center;

}
@media screen and (max-width: 768px){
    padding: 0 14px;
}
`
export const FormHeader=styled(LinkRouter)`
 font-size: 28px;
 font-weight: 600;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-decoration: none;
 color: ${({theme})=> theme.colors.lemon};
 margin-top: 0.5rem;

`
export const FormContent=styled.div`
height: 550px;
background-color: #fff;
@media screen and (min-width: 800px){
box-shadow: 0 1px 3px rgba(0,0,0,0.5);
width: 480px;
padding: 10px 30px;
border-radius: 8px;
}
`
export const LoginWrapper= styled.form`
 margin-top: 24px;

 @media screen and (max-width: 768px){
 }
 @media screen and (min-width: 1000px){
  margin: 15px 0;
 }
`
export const InputGroup= styled.div`
margin-bottom: 18px;`
export const Input= styled.input`
 width: 100%;
 outline: 0;
 border: 1px solid #010606;
 padding: 0.65rem 0.8rem;
 border-radius: 7px;
 transition: all 0.5s ease-in;
 &:hover{
    border: 1px solid blue;
    transition: all 0.5s ease-in;
 }
`
export const InputLabel=styled.label`
display: block;
color: #010606;
margin-bottom: 10px;
`

export const ButtonWrapper= styled.div`
 width: 100%;
`
export const Button= styled.button`
 width: 100%;
 border: 0;
 font-size: 16px;
 outline: 0;
 height: 43px;
 margin-top: 14px;
 border-radius: 8px;
 font-weight: 500;
 color: #fff;
 background-color: ${({theme})=> theme.colors.lemon};
 transition: all 0.5s ease-in-out;
 &:hover{
    transition: all 0.5s ease-in-out;
 }
 @media screen and (max-width: 768px){
    margin-top: 17px;
 }
`
