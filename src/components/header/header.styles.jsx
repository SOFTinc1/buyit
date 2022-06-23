import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  font-weight: 800;
  letter-spacing: 0.1rem;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin: -10px 0 0 0;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  padding: 0 10px 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin: 10px 0 0 0;
  }
  
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 15%;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 40%;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 100%;
  margin: -20px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 100%;
    margin: -10px 0 0 0;
  }
`;


export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
  font-weight: 400;

  @media screen and (max-width: 800px) {
    padding: 5px 5px;
  }
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
  text-transform: capitalize;
`;

export const CartT = styled.div`
  padding: -15px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: -20px 0 0 0;
  }
`;
