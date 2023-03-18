import "./EventDetails.css";
import { useEffect, useState } from "react";
import { getEventById } from "../services/getEventById";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const EventDetails = () => {
  const [event, setEvent] = useState<any | undefined>();
  const pathId: string | undefined = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathId) {
      getEventById("G5vYZ98KcFtaq")
        .then((res) => {
          console.log("test res", res);
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
      <h1>{event?.name}</h1>
      {event ? (
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
                  src={event?._embedded.attractions[0].images[0].url}
                  alt="the GIF"
                />{" "}
              </Grid>
              {/* <Grid item xs={2}>
                <h3>VS</h3>
              </Grid> */}
              <Grid item xs={6}>
                <img
                  className="image"
                  src={event?._embedded.attractions[1].images[6].url}
                  alt="the GIF"
                />{" "}
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
                <h1>Event Date and Time: </h1>
                <h2>
                  {event?.dates?.start?.localDate},{" "}
                  {event?.dates?.start?.localTime}
                </h2>
              </Grid>

              <Grid item xs={6}>
                <h1>Price Range</h1>
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
          <p >
            <a href={event?.url} target="_blank" rel="noreferrer">
              <h3 className=".link">Link to Event</h3>
            </a>
          </p>
        </>
      ) : (
        <p>
          Id of: {pathId} not found. <Link to="/">Go Home</Link>
        </p>
      )}

      {/* {event ? (
        <>
          <h3>{event?.name}</h3>
          <div >
          <img src={event?._embedded.attractions[0].images[6].url} alt="the GIF" />
          <p>VS</p>
          <img src={event?._embedded.attractions[1].images[0].url} alt="the GIF" />

          </div>
          <p className=".link">
            <a href={event?.url} target="_blank" rel="noreferrer">
              Link to Event
            </a>
          </p>
        </>
      ) : (
        <p>
          Id of: {pathId} not found. <Link to="/">Go Home</Link>
        </p>
      )} */}
    </div>
  );
};

export default EventDetails;
