import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';
import CenterBody from './components/CenterBody';
import Create from './components/Create';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody/>
          <CenterBody/>
          <RightBody mode={mode} setMode={setMode}/>
        </Stack>
        <Create />
      </Box>
    </ThemeProvider>
  );
}


export default App;
