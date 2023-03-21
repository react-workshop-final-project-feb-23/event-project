import "./EventSocial.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

interface Props {
  eventSocial: any;
}

const EventSocial = ({ eventSocial }: Props) => {
  return ( eventSocial &&
    <div className="EventSocial">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Link
              href={eventSocial?.externalLinks?.twitter[0]?.url}
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              <h4>
                <TwitterIcon
                  style={{ color: "darkBlue", fontSize: 60, paddingRight: 10 }}
                  fontSize="large"
                />
              </h4>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href={eventSocial?.externalLinks?.wiki[0]?.url}
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              <h4>
                <InfoIcon
                  style={{ color: "brown", fontSize: 60, paddingRight: 10 }}
                  fontSize="large"
                />
              </h4>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href={eventSocial?.externalLinks?.facebook[0]?.url}
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              <h4>
                <FacebookIcon
                  style={{ color: "blue", fontSize: 60, paddingRight: 10 }}
                  fontSize="large"
                />
              </h4>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href={eventSocial?.externalLinks?.instagram[0]?.url}
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              <h4>
                <InstagramIcon
                  style={{ color: "red", fontSize: 60, paddingRight: 10 }}
                  fontSize="large"
                />
              </h4>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              href={eventSocial?.externalLinks?.homepage[0]?.url}
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              <h4>
                <HomeIcon
                  style={{ color: "purple", fontSize: 60, paddingRight: 10 }}
                  fontSize="large"
                />
              </h4>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EventSocial;
