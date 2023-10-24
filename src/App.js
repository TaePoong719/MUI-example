import './App.css';
import Button from '@mui/material/Button'
/* 아이콘 import 두가지 방법 */
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import styled from '@emotion/styled'
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Button size="large" variant="contained"> contained</Button>
      <Button endIcon={<AdjustOutlinedIcon/>} fullWidth variant="outlined"> outlined</Button>
      <Button startIcon={<AcUnitIcon/>} variant="text"> text</Button>
      <Button sx={{
        backgroundColor: 'gray',
        color:'white',
        margin: '10px',
        "&:hover":{
          backgroundColor: 'black'
        },
        "&:disabled":{
          backgroundColor: 'white',
          color: 'black'
        }
      }}> Custom Style</Button>
      <CustomButton>Custom Button Style</CustomButton>
      <Typography variant="h1" component="div" gutterBottom> h1. Heading</Typography> 
    </div>
  );
}

const CustomButton = styled(Button)({
  backgroundColor: 'gray',
  color:'white',
  margin: '10px',
  "&:hover":{
    backgroundColor: 'black'
  },
  "&:disabled":{
    backgroundColor: 'white',
    color: 'black'
  }
})

export default App;
