import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        
        
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }

    a {
        text-decoration: none;
        color: #000;
        font-weight: normal;
        
        &:hover {
            color: #8d6648;
            font-weight: 500;
        }
    }
`;
