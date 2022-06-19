import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  padding: 0 80px;

  @media screen and (max-width: 800px) {
    padding: 0 0 1rem 0;
  }
`;

export const Ul = styled.ul`
  padding: 0;
`;
export const Li = styled.li`
  padding: 0;
`;

export const Logoh1 = styled.h1`
  width: 100%;
  font-size: 20px;
  font-family: Axiforma;
  letter-spacing: 1px;
  color: #8d6648;
  font-weight: 800;
`;

export const LogoContainer = styled(Link)`
  width: 100%;
`;

export const Anchor = styled(Link)`
  color: #000;
  font-family: Axiforma;
  font-size: 13px;
  margin: 0 30px;

  &:hover {
    // color: #fff;
    font-weight: 800;
  }
`;
