import { createGlobalStyle } from 'styled-components';

import { normalizeCss } from './normalizeCss';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0;
  }

  ${normalizeCss};
`