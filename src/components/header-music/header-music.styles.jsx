import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  font-weight: 800;
  letter-spacing: 3px;
  cursor: pointer;
  color: #fff;
  font-family: Axiforma;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    // margin: -10px 0 0 0;
    padding: 0;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  padding: 0 10px 0 10px;
  width: 100%;
  background: #252427;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;

  @media screen and (max-width: 800px) {
    height: 65px;
    padding: 10px;
    margin: 0;
  }
  
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 15%;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 30%;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 100%;
  margin: -20px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 100%;
    margin: 4px 0 0 0;
  }
`;


export const OptionsContainer = styled.div`
  padding: 10px 50px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 0;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
  font-weight: 800;
  letter-spacing: 5px;

  @media screen and (max-width: 800px) {
    padding: 5px 5px;
    font-size: 12px;
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
