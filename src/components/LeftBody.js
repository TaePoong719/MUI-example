import { AddShoppingCart, Drafts, Home, Inbox } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const LeftBody = () => {
  return (
    <Box
      flex={1} p={2}
      sx={{
        display: {xs: 'none', sm: 'block'},
        backgroundColor: 'primary.main'
      }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Inbox/>
              </ListItemIcon>
              <ListItemText primary="Inbox"></ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Drafts/>
              </ListItemIcon>
              <ListItemText primary="Drafts"></ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <AddShoppingCart/>
              </ListItemIcon>
              <ListItemText primary="Shopping"></ListItemText>
            </ListItem>
          </List>
        </Box>
    </Box>
  )
}

export default LeftBody