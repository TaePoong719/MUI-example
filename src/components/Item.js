import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Item = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor:"red"}}>
              R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
      <CardMedia
        component="img"
        height="194"
        image='https://firebasestorage.googleapis.com/v0/b/employee-management-c0a21.appspot.com/o/bigimage%2F%EA%B0%80%EB%A0%8C.jpg?alt=media&token=f5dd05f5-1036-44d3-9787-6abe2a42cc90'
        />
      <CardContent>
        <Typography variant="body2"> 어쩌구 저쩌구 </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}

export default Item