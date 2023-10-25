import { Box, Checkbox, FormControlLabel, FormGroup, Switch } from '@mui/material'
import React, { useState } from 'react'

const RightBody = () => {
  const [mode, setMode] = useState('light')
  return (
    <Box
      flex={2} p={2}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" ></FormControlLabel>
          <FormControlLabel disabled control={<Checkbox/>} label="Disabled"></FormControlLabel>
        </FormGroup>

        <FormGroup>
          <FormControlLabel 
            control={<Switch onChange={()=>{setMode(mode==="light"?"dark" : "light")}} />} 
            label={mode} ></FormControlLabel>
          <FormControlLabel disabled control={<Checkbox/>} label="Disabled"></FormControlLabel>
        </FormGroup>
    </Box>
  )
}

export default RightBody