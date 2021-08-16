import React from 'react'
import Routes from './navigation/routes'
import ResetStyles from 'styles/reset'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
