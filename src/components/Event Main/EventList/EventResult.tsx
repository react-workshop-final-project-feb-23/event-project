import './EventResult.css'
import { Link } from 'react-router-dom'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined'
import Grid from '@mui/material/Grid'
import moment from 'moment'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EventIcon from '@mui/icons-material/Event'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'
import { BucketListContext } from '../../../context/BucketListContext'

interface ResultProps {
  event: any
}

const EventResult = ({ event }: ResultProps) => {
  const { addToBucketList, isEventInBucketList, removeEventFromBucketList } = React.useContext(BucketListContext)
  return (
    <Card
      style={{
        maxWidth: 500,
        minWidth: 500,
        margin: '50px 90px 20px 20px',
        boxShadow: '10px 10px 50px #ccc',
        borderRadius: 10,
        display: 'inline-block',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {event?.classifications[0]?.segment?.name === 'Music' ? <LibraryMusicIcon /> : <SportsBasketballIcon />}
          </Avatar>
        }
        title={`Event: ${event?.classifications[0]?.genre?.name} , Type: ${event?.classifications[0]?.type?.name}`}
      />
      <>
        <CardMedia
          sx={event?._embedded.attractions[1] !== undefined ? { height: 140 } : { height: 280 }}
          image={event?._embedded.attractions[0]?.images[0].url}
          title='green iguana'
        />
        {event?._embedded.attractions[1] && (
          <CardMedia sx={{ height: 140 }} image={event?._embedded.attractions[1]?.images[0].url} title='green iguana' />
        )}
      </>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <b>{event?.name}</b>
        </Typography>
        <Typography gutterBottom variant='h6' component='div'>
          {' '}
          <EventIcon style={{ color: 'blue' }} />{' '}
          {moment(event?.dates?.start?.localDate, 'Y/M/D').format('dddd, MMMM D, Y')} at{' '}
          {moment(event?.dates?.start?.localTime, 'h/m/s').format('hh:mm A')}{' '}
        </Typography>
        <h4>
          {' '}
          <LocationOnOutlinedIcon style={{ color: 'red' }} /> {event?._embedded.venues[0]?.name}
        </h4>
        <h4>
          {event?._embedded.venues[0].address.line1}, {event?._embedded.venues[0].city?.name},{' '}
          {event?._embedded.venues[0].state?.name}, {event?._embedded.venues[0].country.countryCode},{' '}
          {event?._embedded.venues[0].postalCode}
        </h4>
      </CardContent>
      <CardActions
        style={{
          maxWidth: 500,
          minWidth: 450,
          display: 'inline-block',
          margin: '10px 30px 10px 10px',
        }}
      >
        <Link to={`/event/${event.id}`} style={{ paddingRight: 20 }}>
          <Button size='large'>Details</Button>
        </Link>
        {isEventInBucketList(event.id) ? (
          <Button size='large' style={{ float: 'right' }} onClick={() => removeEventFromBucketList(event.id)}>
            <BookmarkRemoveIcon />
            Remove from Bucket List
          </Button>
        ) : (
          <Button size='large' style={{ float: 'right' }} onClick={() => addToBucketList(event)}>
            <BookmarkAddOutlinedIcon />
            Add to Bucket List
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default EventResult
