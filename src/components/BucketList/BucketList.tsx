import React from 'react'

import {
  Avatar,
  Container,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import DeleteIcon from '@mui/icons-material/Delete'

// This is a basic MUI List, waiting for the bucketList context

function BucketItem() {
  const handleItemClick = () => console.log('Item Click')
  const handleDeleteClick = () => console.log('Delete Click')

  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={handleItemClick}>
        <ListItemAvatar>
          <Avatar>
            <EventIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Event' secondary='Event URL' />
      </ListItemButton>
    </ListItem>
  )
}

export default function BucketList() {
  return (
    <Container>
      <Card sx={{ marginTop: '32px' }}>
        <CardContent>
          <List>
            <BucketItem />
            <Divider />
            <BucketItem />
            <Divider />
            <BucketItem />
          </List>
        </CardContent>
      </Card>
    </Container>
  )
}