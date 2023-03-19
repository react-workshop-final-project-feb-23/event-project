import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import LocalParkingRoundedIcon from "@mui/icons-material/LocalParkingRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import AccessibleRoundedIcon from "@mui/icons-material/AccessibleRounded";

interface StaiumProps {
  event: any;
}

const StadiumDetails = ({ event }: StaiumProps) => {
  return (
    <div className="StadiumDetails">
      <Card sx={{ minWidth: 50 }} style={{ backgroundColor: "#EFEFFB" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h1 style={{ textAlign: "center" }}>Stadium Information</h1>
          </Typography>
          <Typography variant="h5" component="span">
            <Box sx={{ width: "100%" }}>
              <Grid>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <WatchLaterOutlinedIcon
                        style={{
                          marginTop: 5,
                          justifyContent: "center",
                          paddingRight: 5,
                        }}
                      />
                      Open Hours
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <h4>
                        <PhoneEnabledRoundedIcon
                          style={{
                            marginTop: 5,
                            justifyContent: "center",
                            paddingRight: 5,
                          }}
                        />{" "}
                        {
                          event?._embedded.venues[0].boxOfficeInfo
                            .phoneNumberDetail
                        }
                      </h4>
                      <h4>
                        {
                          event?._embedded.venues[0].boxOfficeInfo
                            .openHoursDetail
                        }
                      </h4>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <AccessibleRoundedIcon
                        style={{
                          marginTop: 5,
                          justifyContent: "center",
                          paddingRight: 5,
                        }}
                      />
                      Accessible Seating Detail
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <h4>
                        {event?._embedded.venues[0].accessibleSeatingDetail}
                      </h4>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <LocalParkingRoundedIcon
                        style={{
                          marginTop: 5,
                          justifyContent: "center",
                          paddingRight: 5,
                        }}
                      />
                      Parking Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <h4>{event?._embedded.venues[0].parkingDetail}</h4>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <InfoRoundedIcon
                        style={{
                          marginTop: 5,
                          justifyContent: "center",
                          paddingRight: 5,
                        }}
                      />
                      General Information
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <h4>
                        *{event?._embedded.venues[0].generalInfo.generalRule}
                      </h4>
                      <h4>
                        *{event?._embedded.venues[0].generalInfo.childRule}
                      </h4>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <EmojiEventsRoundedIcon
                        style={{
                          marginTop: 5,
                          justifyContent: "center",
                          paddingRight: 5,
                        }}
                      />
                      Upcoming Events
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <h4>
                        {event?._embedded.venues[0].upcomingEvents._total}
                      </h4>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Box>
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default StadiumDetails;
