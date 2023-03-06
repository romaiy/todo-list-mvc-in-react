import React from 'react';
import { Container } from '@material-ui/core';
import Todolist from './Todolist';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="sm" justify="center">
        <Todolist />
      </Container>
    </ThemeProvider>
  );
}

export default App;
