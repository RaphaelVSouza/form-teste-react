import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;

    }

    body {
      font-size: ${theme.font.sizes.small};
    }

    .container {
      width: 90%;
      margin: 0 auto;

      @media ${theme.media.desktop} {
        max-width: ${theme.grid.container}
      }


    }

  `}
`

export default GlobalStyles
