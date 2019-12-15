import React from 'react';
import { ThemeProvider } from 'styled-components';

/**
 * You can import the files using the alias @
 * for example: import GlobalStyle from '@/views/styles/global';
 */
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Routes from '@/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
