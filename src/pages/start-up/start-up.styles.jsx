import styled from "styled-components";

export const StartUpContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
