import { Box, Stack } from '@mui/material';
import './App.css';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';
import CenterBody from './components/CenterBody';
import Create from './components/Create';

function App() {
  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftBody/>
        <CenterBody/>
        <RightBody/>
      </Stack>
      <Create />
    </Box>
  );
}


export default App;
