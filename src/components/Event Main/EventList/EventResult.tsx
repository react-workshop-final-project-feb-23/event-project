import './EventResult.css'
import { Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';



interface ResultProps {
  event: any;
}

const EventResult = ({ event }: ResultProps) => {
  return (

    <Card sx={{ maxWidth: 345 }} style={{margin: 20, boxShadow :"5px 5px 10px #ccc" }}>
      <>
        <CardMedia
          sx={{ height: 140 }}
          image={event?._embedded.attractions[0]?.images[0].url}
          title="green iguana"
        />
        {event?._embedded.attractions[1] &&
          <CardMedia
            sx={{ height: 140 }}
            image={event?._embedded.attractions[1]?.images[0].url}
            title="green iguana"
          />}
      </>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event?.name}
        </Typography>
        <h4>{event?._embedded.venues[0].name}</h4>
        <h4>
          {event?._embedded.venues[0].address.line1},
          {event?._embedded.venues[0].city.name},
          {event?._embedded.venues[0].state.name}, {event?._embedded.venues[0].country.countryCode},
          {event?._embedded.venues[0].postalCode}
        </h4>
      </CardContent>
      <CardActions>
        <Link to={`/event/${event.id}`}>
          <Button size="small">Details</Button>

        </Link>
        <Button size="small"><BookmarkAddOutlinedIcon/>Add to Favorites</Button>
      </CardActions>
    </Card>
  )
};

export default EventResult;
