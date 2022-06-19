import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: transparent;
  color: #8d6648;
  border: none;
  // border-bottom: 1px solid #8d6648;
  transition: all .5s ease-in; 

  &:hover {
    border-bottom: 2px solid #8d6648;
  }
`;

const InvertedButtonStyles = css`
`;

const GoogleSignInStyles = css`
`;

const getButtonStyles = (props) => {
};

export const CustomButtonContainer = styled.button`
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: "Rehn";
  text-transform: capitalize;

  ${ButtonStyles}
`;
