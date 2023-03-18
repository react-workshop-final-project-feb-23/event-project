import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import "./EventHeader.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const EventHeader = () => {
  return (
    <div className="EventHeader">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 10 }}>
            <Link href="/" underline="hover">
            <h1><LocalActivityOutlinedIcon  style={{ color: 'black', fontSize: 60,  paddingRight: 10}} fontSize="large"/> Events</h1>
          </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/favorites" underline="hover">
            <h1>Favorites <FavoriteBorderOutlinedIcon  style={{ color: 'black', fontSize: 60, paddingLeft: 10}} fontSize="large"/></h1>
          </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={10}>
          <Link href="/" underline="hover">
            <h1>Events</h1>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="/favorites" underline="hover">
            <h1>Favorites</h1>
          </Link>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default EventHeader;
