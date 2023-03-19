import "./EventDetails.css";
import { useEffect, useState } from "react";
import { getEventById } from "../services/getEventById";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EventSocial from "./EventSocial";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";
import Map from "./Map";

const EventDetails = () => {
  const [event, setEvent] = useState<any | undefined>();
  const pathId: string | undefined = useParams().id;
  const navigate = useNavigate();
  // pathId for testing -G5v0Z98m2Lv3m, vvG1IZ9074wU4P
  useEffect(() => {
    if (pathId) {
      getEventById(pathId)
        .then((res) => {
          if (res) {
            setEvent(res);
          } else {
            //navigate
          }
        })
        .catch((err) => navigate("/"));
    }
  }, [pathId]);

  return (
    <div className="EventDetails">
      {event ? (
        <>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={5}>
                <h1>
                  {event?.name} (
                    <a href={event?.url} target="_blank" rel="noreferrer">
                      <span>
                        <EventSeatOutlinedIcon
                          style={{ fontSize: 35, paddingRight: 5 }}
                        />
                        Link to Event
                      </span>
                    </a> ) 
                </h1>
              </Grid>
              <Grid item xs={7}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={2}>
                      <StadiumOutlinedIcon
                        style={{
                          fontSize: 80,
                          paddingTop: 30,
                          paddingRight: 5,
                          color: "green",
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <h2>Venue: {event?._embedded.venues[0].name}</h2>
                      <h3>
                        {event?._embedded.venues[0].address.line1},{" "}
                        {event?._embedded.venues[0].city.name},{" "}
                        {event?._embedded.venues[0].state.name}
                      </h3>
                      <h3>
                        {event?._embedded.venues[0].country.countryCode},{" "}
                        {event?._embedded.venues[0].postalCode}
                      </h3>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        className="image1"
                        src={event?._embedded.venues[0]?.images[0].url}
                        alt="the GIF"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <h1 className="title">
                  <CalendarMonthIcon /> Event Date and Time:{" "}
                </h1>
                <Box sx={{ width: "100%", paddingLeft: 20 }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <h2 style={{ paddingLeft: 50 }}>
                        {event?.dates?.start?.localDate},{" "}
                        {event?.dates?.start?.localTime}
                      </h2>{" "}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <h1 className="title">
                  <MonetizationOnIcon />
                  Price Range
                </h1>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <h2>Min: ${event?.priceRanges[0]?.min}</h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2>Max: ${event?.priceRanges[0]?.max}</h2>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {event?._embedded.attractions.length > 1 ? (
            <>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <img
                      className="image"
                      src={event?._embedded.attractions[0]?.images[0].url}
                      alt="the GIF"
                    />
                    <EventSocial
                      eventSocial={event?._embedded.attractions[0]}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <img
                      className="image"
                      src={event?._embedded.attractions[1]?.images[6].url}
                      alt="the GIF"
                    />
                    <EventSocial
                      eventSocial={event?._embedded.attractions[1]}
                    />
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ width: "100%", paddingLeft: 1 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid>
                    <img
                      className="image"
                      src={event?._embedded.attractions[0]?.images[0].url}
                      alt="the GIF"
                    />
                    <EventSocial
                      eventSocial={event?._embedded.attractions[0]}
                    />
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
          <Map event={event} />
        </>
      ) : (
        <p>
          Id of: {pathId} not found. <Link to="/">Go Home</Link>
        </p>
      )}
    </div>
  );
};

export default EventDetails;
