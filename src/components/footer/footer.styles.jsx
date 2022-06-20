import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 80px 50px 80px;
  background: #000;
  color: #fff;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
export const Brand = styled.div`
  font-family: archwaltz;
  font-size: 80px;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Option = styled.p`
  font-family: Axiforma;
  font-size: 15px;
  text-transform: capitalize;
`;

export const FormContainer = styled.div`
  background: transparent;
  width: 100%;
  border: 0.15rem solid #fff;
  border-radius: 5px;
  padding: 15px 15px 15px 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    text-transform: capitalize;
  }
`;
export const Option1 = styled.div`
  font-family: archwaltz;
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 800;
  letter-spacing: 2px;
`;
