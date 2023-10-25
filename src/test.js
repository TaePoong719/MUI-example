import React from 'react'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'
import theme from './theme';
import { blue, green, red } from '@mui/material/colors';
import { Box, Stack, Typography } from '@mui/material';


const test = () => {
  return (
    <div>      
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Box sx={{
        width: 300, height: 300, backgroundColor: 'primary.main',
        '&:hover':{
          backgroundColor : 'secondary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}/>
      <Box sx={{
        width: 300, height: 300, backgroundColor: 'primary.main',
        '&:hover':{
          backgroundColor : 'secondary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}/>
      <Box sx={{
        width: 300, height: 300, backgroundColor: 'primary.main',
        '&:hover':{
          backgroundColor : 'secondary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}/>
    </Stack>
    <br/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Box sx={{
        width: 300, height: 300, backgroundColor: 'primary.main',
        '&:hover':{
          backgroundColor : 'secondary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
        flex={1} p={2}/>
      <Box sx={{
        width: 300, height: 300, backgroundColor: 'primary.main',
        '&:hover':{
          backgroundColor : 'secondary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
      flex={2} p={2}/>
      <Box sx={{
        width: 300, height: 300, backgroundColor: 'primary.main',
        display:{xs: 'none', sm: 'block'},
        '&:hover':{
          backgroundColor : 'secondary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
      flex={3} p={2}/>
    </Stack>
    <Button variant="contained"> Theme Button </Button>
    <Button> Theme Button </Button>
    <Button color="secondary"> Theme Button </Button>
    <CustomThemeButton> Custom Theme Button</CustomThemeButton>
    <Root>
      <Typography> down(md) red </Typography>
      <Typography> up(md) blue </Typography>
      <Typography> up(lg) green </Typography>
    </Root>
  </div>
  )
}

const Root = styled(`div`)(({theme})=>({
  [theme.breakpoints.down('md')]:{
    backgroundColor: red[500]
  },
  [theme.breakpoints.up('md')] :{
    backgroundColor: blue[500]
  },
  [theme.breakpoints.up('lg')] :{
    backgroundColor: green[500]
  }
}))

const CustomThemeButton = styled(Button)(({theme})=>({
  backgroundColor: theme.palette.primary.secondary
}))


export default test