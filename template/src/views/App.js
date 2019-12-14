import React from 'react';
import logo from '../assets/images/logo.svg';
import { ThemeProvider } from 'styled-components';

/**
 * You can import the files using the alias @
 * for example: import GlobalStyle from '@/views/styles/global';
 */
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the delicious donut template</p>
          <a
            className="App-link"
            href="https://github.com/heybrunoandrade/delicious-donut"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </header>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
