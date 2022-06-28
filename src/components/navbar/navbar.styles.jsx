import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 63px;
  padding: 0;
  width: 100%;
  background: #252427;
  color: #fff;

  @media screen and (max-width: 800px) {
    height: auto;
    padding: 10px;
    margin: 0;
  }
`;

export const Ul = styled.ul`
  padding: 0;
  color: #fff;
`;
export const Li = styled.li`
  padding: 0;

  @media screen and (max-width: 800px) {
    padding: 10px 10px 0 10px;
    color: #fff;
  }
`;

export const LogoImg = styled.div`

`;

export const LogoContainer = styled(Link)`
  width: 100%;
`;

export const Anchor = styled(Link)`
  font-family: Axiforma;
  margin: 0 20px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
  color: #fff;

  @media screen and (max-width: 800px) {
    height: 65px;
    margin: 0;
    font-size: 22px;
    color: #fff;
  }
`;
