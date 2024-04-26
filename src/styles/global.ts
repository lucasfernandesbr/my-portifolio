import { createGlobalStyle } from 'styled-components'

import colors from '@/tokens/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    overflow: overlay;

    min-height: 100vh;
  }

  html, body {
    font-size: 62.5%;
    color: ${colors.grayscale[1000]};

    -webkit-font-smoothing: antialiased;
  }

  body {
    background: ${colors.grayscale[0]};

    font-size: 1.6rem;
  }
`
