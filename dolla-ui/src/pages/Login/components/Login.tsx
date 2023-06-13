import React from "react";
import {
  LoginContainer,
  FormHeader,
  ButtonWrapper,
  FormContent,
  Button,
  LoginWrapper,
  Input,
  InputGroup,
  InputLabel,
} from "../styles/Login";
const Login = () => {
  return (
    <LoginContainer>
      <FormContent>
        <FormHeader to="/">Dolla</FormHeader>
        <LoginWrapper>
          <InputGroup>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input placeholder="Enter your first Name" id="firstName" type="text" />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input id="lastName" placeholder="Enter your Last Name" type="text" />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" placeholder="Enter your Email" type="text" />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" placeholder="Enter your Password" />
          </InputGroup>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </LoginWrapper>
      </FormContent>
    </LoginContainer>
  );
};

export default Login;
