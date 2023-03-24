import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Avatar,
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import DeleteIcon from '@mui/icons-material/Delete'
import { BucketListContext } from '../../context/BucketListContext'
import IEvent from '../../models/IEvent'

// This is a basic MUI List, waiting for the bucketList context

function BucketItem({ item, removeItem }: { item: IEvent; removeItem: (id: string) => void }) {
  const { name, id, dates, images } = item
  const navigate = useNavigate()
  const handleItemClick = () => navigate(`/event/${id}`)
  const handleDeleteClick = () => removeItem(id)
  const avatarSrc = images && images?.length > 0 && images[4].url

  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={handleDeleteClick} color='error'>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={handleItemClick} sx={{ marginRight: '16px' }}>
        <ListItemAvatar>
          <Avatar>
            {avatarSrc && <Avatar src={avatarSrc} />}
            {!avatarSrc && <EventIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={dates?.start?.localDate} />
      </ListItemButton>
    </ListItem>
  )
}

export default function BucketList() {
  const { bucketList, removeEventFromBucketList } = useContext(BucketListContext)

  return (
    <Container>
      <Card sx={{ marginTop: '32px' }}>
        <CardHeader title='Your List' titleTypographyProps={{ textAlign: 'center' }} />
        <CardContent>
          {bucketList.length > 0 && (
            <List>
              {bucketList.map((item, index) => (
                <>
                  <BucketItem item={item} removeItem={removeEventFromBucketList} />
                  {index + 1 !== bucketList?.length && <Divider />}
                </>
              ))}
            </List>
          )}
          {bucketList.length === 0 && <Typography textAlign='center'>Added events will be shown here.</Typography>}
        </CardContent>
      </Card>
    </Container>
  )
}
