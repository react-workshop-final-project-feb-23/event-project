import "./EventResult.css";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import Grid from "@mui/material/Grid";
import moment from 'moment'


interface ResultProps {
  event: any;
}

const EventResult = ({ event }: ResultProps) => {
  return (
        
        <Card style={{maxWidth: 500, minWidth:500,  margin: '50px 90px 20px 20px', boxShadow: '10px 10px 50px #ccc', borderRadius: 10, display: 'inline-block'}}>
          <>
            <CardMedia
              sx={event?._embedded.attractions[1] !== undefined ? { height: 140 } : {height: 280}}
              image={event?._embedded.attractions[0]?.images[0].url}
              title="green iguana"
            />
            {event?._embedded.attractions[1] && (
              <CardMedia
                sx={{ height: 140 }}
                image={event?._embedded.attractions[1]?.images[0].url}
                title="green iguana"
              />
            )}
          </>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event?.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            {moment(event?.dates?.start?.localDate, 'Y/M/D').format('dddd, MMMM D, Y')} at{' '}
                        {moment(event?.dates?.start?.localTime, 'h/m/s').format('hh:mm A')}            </Typography>
            <h4>{event?._embedded.venues[0].name}</h4>
            <h4>
              {event?._embedded.venues[0].address.line1},
              {event?._embedded.venues[0].city.name},
              {event?._embedded.venues[0].state.name},{" "}
              {event?._embedded.venues[0].country.countryCode},
              {event?._embedded.venues[0].postalCode}
            </h4>
          </CardContent>
          <CardActions >
            <Link to={`/event/${event.id}`} style={{paddingRight: 20}}>
              <Button size="small">Details</Button>
            </Link>
            <Button size="small">
              <BookmarkAddOutlinedIcon />
              Add to Favorites
            </Button>
          </CardActions>
        </Card>
  );
};

export default EventResult;
