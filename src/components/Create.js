import { Edit } from '@mui/icons-material'
import { Fab, IconButton, Tooltip } from '@mui/material'
import React from 'react'

const Create = () => {
  return (
    <Tooltip title="Create"
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '30px'
      }}>
      <IconButton>
        <Fab color="secondary">
          <Edit />
        </Fab>
      </IconButton>
    </Tooltip>
  )
}

export default Create