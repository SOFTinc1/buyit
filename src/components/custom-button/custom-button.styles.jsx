import styled, { css } from "styled-components";


const ButtonStyles = css`
  background-color: #000;
  color: #F9A825;
  border: none;
  transition: all 0.5s ease-in;
  font-family: "Bw Vivant";
  font-weight: 800;
  text-transform: uppercase;

  &:hover {
    background-color: #8d6648;
    color: #fff;
    border: none;
  }
`;


export const ButtonContainer = styled.button`
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: "Axiforma";
  text-transform: capitalize;
  padding: 0 15px 0 15px;
  
  ${ButtonStyles}
`;