import React from "react";
import { AppBar, Toolbar, Tabs, Tab , Typography} from "@mui/material";
const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Dyslexia</Typography>
          <Tabs sx={{ marginLeft: "auto" }} textColor="white">
            <Tab label="Dashboard" />
            <Tab label="Logout" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
