import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { Theme } from '../models/themes';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    ${normalize}
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        transition: background-color 0.2s;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 30px;
        color: ${({ theme }) => theme.colors.textPrimary};
    }
`;
