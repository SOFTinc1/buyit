import React from "react";
import {
  FooterContainer,
  Row,
  Brand,
  FlexRow,
  Option,
  FormContainer,
  Option1,
  FooterBottom,
  BrandLogo
} from "./footer.styles";
import FormInput from "../form-input/form-input.component";
import Logo from "../../assets/images/logo.svg";

const Footer = () => (
  <FooterContainer>
    <Row>
      <Brand>
        <BrandLogo src={Logo} />
      </Brand>
      <FlexRow>
        <Option1>info</Option1>
        <Option>my account</Option>
        <Option>collection and returns</Option>
        <Option>FAQ's</Option>
      </FlexRow>
      <FlexRow>
        <Option1>catalogue</Option1>
        <Option>men</Option>
        <Option>women</Option>
        <Option>clothes</Option>
        <Option>shoes</Option>
      </FlexRow>
      <FlexRow>
        <Option1>join the crew</Option1>
        <Option>subscribe to our newsletter</Option>
        <form action="">
          <FormContainer as={FormInput} type="text" placeholder="email" />
        </form>
        <FooterBottom>
          made by idowu elijah &copy; 2022
        </FooterBottom>
      </FlexRow>
    </Row>
  </FooterContainer>
);

export default Footer;
