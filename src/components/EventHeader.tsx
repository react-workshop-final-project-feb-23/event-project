import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import "./EventHeader.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const EventHeader = () => {
  const userName = JSON.parse(sessionStorage.getItem("userName") || "");

  const navigate = useNavigate();
  const handleLogout = (): void => {
    sessionStorage.setItem("logedIn", JSON.stringify(false));
    navigate("/signin");
    window.location.reload();
  };
  return (
    <div className="EventHeader">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
              <Link href="/" underline="hover">
                <h1>
                  <LocalActivityOutlinedIcon
                    style={{ color: "brown", fontSize: 60, paddingRight: 10 }}
                    fontSize="large"
                  />{" "}
                  Events
                </h1>
              </Link>
            </Typography>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
              <Link href="/favorites" underline="hover">
                <h1>
                  <FavoriteBorderOutlinedIcon
                    style={{ color: "yellow", fontSize: 50, paddingRight: 10 }}
                    fontSize="large"
                  />
                  Favorites
                </h1>
              </Link>
            </Typography>
            <Typography variant="h6" component="span" sx={{ paddingRight: 2 }}>
              <h1>
                <PersonIcon
                  style={{ color: "black", fontSize: 50, paddingRight: 10 }}
                  fontSize="large"
                />{" "}
                {userName}
              </h1>
            </Typography>
            <Button
              variant="contained"
              onClick={handleLogout}
              color="error"
              endIcon={<LogoutOutlinedIcon />}
              type="submit"
              sx={{ borderRadius: 3 }}
            >
              Signout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default EventHeader;
